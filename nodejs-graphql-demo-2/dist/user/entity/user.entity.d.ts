import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: string;
    name: string;
    nickName?: string;
}
