/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable security/detect-object-injection */

import { objectForEach } from 'common/utils/object/forEach';
import { objectHasOwnProperty } from 'common/utils/object/objectHasOwnProperty';

// https://habr.com/ru/post/229589/

export type Listener = <T>(message: T) => void;
export type Unsubscribe = () => void;

class MessageBus {
    private topics: Record<string, Listener[]>;

    constructor() {
        this.topics = {};
    }

    private getTopic(topicName: string): Listener[] | undefined {
        return objectHasOwnProperty(this.topics, topicName) ? this.topics[topicName] : undefined;
    }

    private unsubscribe(topicName: string, listener: Listener): void {
        const topic = this.getTopic(topicName);

        if (topic) {
            const listenerIndex = topic.findIndex((topicListener: Listener): boolean => {
                return topicListener === listener;
            });

            if (listenerIndex) {
                // eslint-disable-next-line fp/no-delete
                delete this.topics[topicName]![listenerIndex];
            }
        }
    }

    private unsubscribeByIndex(topicName: string, listenerIndex: number): void {
        if (objectHasOwnProperty(this.topics, topicName)) {
            // eslint-disable-next-line fp/no-delete
            delete this.topics[topicName]![listenerIndex];
        }
    }

    subscribeOnEvent(topicName: string, listener: Listener): Unsubscribe {
        if (!objectHasOwnProperty(this.topics, topicName)) {
            this.topics[topicName] = [];
        }

        // eslint-disable-next-line fp/no-mutating-methods
        const listenerIndex = this.topics[topicName]!.push(listener) - 1;

        function unsibscribe(this: MessageBus): void {
            this.unsubscribeByIndex(topicName, listenerIndex);
        }

        return unsibscribe.bind(this);
    }

    postEvent(topicName: string, message?: unknown): void {
        const topic = this.getTopic(topicName);

        if (!topic || topic.length === 0) {
            return;
        }

        topic.forEach((listener: Listener): void => {
            listener(message);
        });
    }

    removeTopicListener(topicName: string, listener: Listener): void {
        this.unsubscribe(topicName, listener);
    }

    removeAllListeners(): void {
        objectForEach(this.topics, (key: string): void => {
            this.removeTopicListeners(key);
        });
    }

    removeTopicListeners(topicName: string): void {
        const topic = this.getTopic(topicName);

        if (topic) {
            topic.length = 0;
        }
    }

    destructor(): void {
        this.removeAllListeners();
        this.topics = {};
    }
}

export default MessageBus;
