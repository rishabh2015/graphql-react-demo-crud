import { Repository } from 'typeorm';
import { CreateUserInput } from '../dto/create-user.input';
import { User } from '../entity/user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(input: CreateUserInput): Promise<User>;
    findOneById(id: string): Promise<User>;
    remove(id: string): Promise<boolean>;
    find(): Promise<User[]>;
}
