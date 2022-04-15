import { FormEvent, useCallback, useLayoutEffect, useEffect, useState } from 'react';

import { classnames as cn } from '@bem-react/classnames';

import css from './schemeSwitcher.css';
import { getSystemColorScheme } from 'common/utils/color-scheme/getSystemColorScheme';
import { saveAndSetColorScheme } from 'common/utils/color-scheme/saveAndSetColorScheme';
import { loadAndSetupColorScheme } from 'common/utils/color-scheme/loadAndSetupColorScheme';

const DARK_SCHEME = 'dark';
const LIGHT_SCHEME = 'light';
const DEFAULT_SCHEME = '';

const DARK_SCHEME_TITLE = 'Тёмная схема';
const LIGHT_SCHEME_TITLE = 'Светлая схема';
const DEFAULT_SCHEME_TITLE = 'Системная световая схема';

const cnRadioLight = cn(css.radio, css['radio-light']);
const cnRadioDefault = cn(css.radio, css['radio-default']);
const cnRadioDark = cn(css.radio, css['radio-dark']);

const isomorphisUseEffect = __CLIENT__ ? useLayoutEffect : useEffect;

// eslint-disable-next-line max-lines-per-function
export const SchemeSwitcher: React.FC = () => {
    const [state, setstate] = useState('');

    isomorphisUseEffect(() => {
        const systemScheme = getSystemColorScheme();
        const savedScheme = loadAndSetupColorScheme();

        if (state !== savedScheme || systemScheme) {
            setstate(savedScheme);
        }
    }, [state]);

    const radioOnClick = useCallback(
        (e: FormEvent<HTMLInputElement>) => {
            const { target } = e;
            const cb = target as HTMLInputElement;

            if (state !== cb.value) {
                const scheme = cb.value;
                setstate(scheme);
                saveAndSetColorScheme(scheme);
            }
        },
        [state],
    );

    return (
        <fieldset className={css.switcher}>
            <legend className={css.legend}>Переключатель световой схемы</legend>
            <input
                type="radio"
                aria-label={LIGHT_SCHEME_TITLE}
                title={LIGHT_SCHEME_TITLE}
                value={LIGHT_SCHEME}
                className={cnRadioLight}
                checked={state === LIGHT_SCHEME}
                onChange={radioOnClick}
            />
            <input
                type="radio"
                aria-label={DEFAULT_SCHEME_TITLE}
                title={DEFAULT_SCHEME_TITLE}
                value={DEFAULT_SCHEME}
                className={cnRadioDefault}
                checked={state === DEFAULT_SCHEME}
                onChange={radioOnClick}
            />
            <input
                type="radio"
                aria-label={DARK_SCHEME_TITLE}
                title={DARK_SCHEME_TITLE}
                value={DARK_SCHEME}
                className={cnRadioDark}
                checked={state === DARK_SCHEME}
                onChange={radioOnClick}
            />
            <div className={css.status} aria-hidden="true"></div>
        </fieldset>
    );
};
