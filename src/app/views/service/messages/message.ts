import { User } from "../users/user";

export class message{
    from: User;
    to: User[];
    content: string;
}