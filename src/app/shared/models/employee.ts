export interface Employee {
    id: number;
    name: string;
    email: string;
    photo?: string;
    role: string;
    departament: string;
    active: boolean;
    startedAt: Date;
}
