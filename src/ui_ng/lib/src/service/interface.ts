/**
 * The base interface contains the general properties
 * 
 * @export
 * @interface Base
 */
export interface Base {
    id?: string | number;
    name?: string;
    creation_time?: Date;
    update_time?: Date;
}

/**
 * Interface for Repository
 * 
 * @export
 * @interface Repository
 * @extends {Base}
 */
export interface Repository extends Base {
    name: string;
    tags_count: number;
    owner_id?: number;
    project_id?: number;
    description?: string;
    star_count?: number;
    pull_count?: number;
}

/**
 * Interface for the tag of repository
 * 
 * @export
 * @interface Tag
 * @extends {Base}
 */

export interface Tag extends Base {
    digest: string;
    name: string;
    architecture: string;
    os: string;
    docker_version: string;
    author: string;
    created: Date;
    signature?: string;
    scan_overview?: VulnerabilitySummary;
}

/**
 * Interface for registry endpoints.
 * 
 * @export
 * @interface Endpoint
 * @extends {Base}
 */
export interface Endpoint extends Base {
    endpoint: string;
    name: string;
    username?: string;
    password?: string;
    type: number;
}

/**
 * Interface for replication rule.
 * 
 * @export
 * @interface ReplicationRule
 */
export interface ReplicationRule extends Base {
    project_id: number | string;
    project_name: string;
    target_id: number | string;
    target_name: string;
    enabled: number;
    description?: string;
    cron_str?: string;
    start_time?: Date;
    error_job_count?: number;
    deleted: number;
}

/**
 * Interface for replication job.
 * 
 * @export
 * @interface ReplicationJob
 */
export interface ReplicationJob extends Base {
    status: string;
    repository: string;
    policy_id: number;
    operation: string;
    tags: string;
}

/**
 * Interface for storing metadata of response.
 * 
 * @export
 * @interface Metadata
 */
export interface Metadata {
    xTotalCount: number;
}

/**
 * Interface for access log.
 * 
 * @export
 * @interface AccessLog
 */
export interface AccessLog {
    metadata?: Metadata;
    data: AccessLogItem[];
}

/**
 * The access log data.
 * 
 * @export
 * @interface AccessLogItem
 */
export interface AccessLogItem {
    [key: string]: any
    log_id: number;
    project_id: number;
    repo_name: string;
    repo_tag: string;
    operation: string;
    op_time: string | Date;
    user_id: number;
    username: string;
    keywords?: string; //NOT used now
    guid?: string; //NOT used now
}

/**
 * Global system info.
 * 
 * @export 
 * @interface SystemInfo
 * 
 */
export interface SystemInfo {
    with_clair?: boolean;
    with_notary?: boolean;
    with_admiral?: boolean;
    admiral_endpoint?: string;
    auth_mode?: string;
    registry_url?: string;
    project_creation_restriction?: string;
    self_registration?: boolean;
    has_ca_root?: boolean;
    harbor_version?: string;
}

export enum VulnerabilitySeverity {
    _SEVERITY, NONE, UNKNOWN, LOW, MEDIUM, HIGH
}

export interface VulnerabilityBase {
    id: string;
    severity: VulnerabilitySeverity;
    package: string;
    version: string;
}

export interface VulnerabilityItem extends VulnerabilityBase {
    fixedVersion: string;
    layer?: string;
    description: string;
}

export interface VulnerabilitySummary {
    image_digest?: string;
    scan_status: string;
    job_id?: number;
    severity: VulnerabilitySeverity;
    components: VulnerabilityComponents;
    update_time: Date; //Use as complete timestamp
}

export interface VulnerabilityComponents {
    total: number;
    summary: VulnerabilitySeverityMetrics[];
}

export interface VulnerabilitySeverityMetrics {
    severity: VulnerabilitySeverity;
    count: number;
}

export interface TagClickEvent {
    project_id: string | number;
    repository_name: string;
    tag_name: string;
}