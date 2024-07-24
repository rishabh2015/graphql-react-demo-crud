import { CreateUserInput } from '../dto/create-user.input';
import { User } from '../entity/user.entity';
import { UserService } from '../service/user.service';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    user(id: string): Promise<User>;
    createUser(input: CreateUserInput): Promise<User>;
    removeUser(id: string): Promise<boolean>;
    users(): Promise<User[]>;
}
