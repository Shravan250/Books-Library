import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    author!: string;

    @Column()
    category!: string;

    @Column({type: "decimal", precision: 2, scale: 1, nullable: true})
    rating?: number;
}