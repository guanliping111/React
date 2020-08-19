export enum methodEnum {
    log, info, warn, debug, error
}
export type EnumKeys = keyof typeof methodEnum;// typeof 提取key 形成数组

export type methodEnumInterface = {
    // log:(...args:any[]) => void;
    // warn:(...args:any[]) => void;
    [key in EnumKeys]:(...args: any[]) => void;
}
export interface LogInfos {
    logType: EnumKeys,
    infos: any[]
}