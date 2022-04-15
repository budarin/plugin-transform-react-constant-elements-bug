import type Prometheus from 'prom-client';

export interface MetricDefinition {
    key: string;
    help: string;
}

export type Metric =
    | Prometheus.Metric
    | Prometheus.Counter<string>
    | Prometheus.Histogram<string>
    | Prometheus.Summary<string>;

export type MetricType = 'counter' | 'histogram' | 'summary' | 'gauge';

export type MetricSetup =
    | Prometheus.CounterConfiguration
    | Prometheus.SummaryConfiguration
    | Prometheus.HistogramConfiguration;
