export interface ICoreTags{
    appName: string;
    environment: string;
    businessUnit: string;
}

export interface IRawCore{
        ConsumedQuantity: string;
        Cost: string;
        Date: string;
        InstanceId:string;
        MeterCategory: string;
        ResourceGroup: string;
        ResourceLocation: string;
        Tags: any;
        UnitOfMeasure: string;
        Location: string;
        ServiceName: string;
}