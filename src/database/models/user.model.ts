import { Optional } from "sequelize"
import { Table, Column, Model, PrimaryKey, HasMany } from 'sequelize-typescript';
import UserAnswer from "./userAnswer.model";

interface UserAttributes {
    id: number;
    username: string;
    password: string;
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

@Table({
    timestamps: false
})
export default class User extends Model<UserAttributes, UserCreationAttributes> {

    @PrimaryKey
    @Column
    id!: number;

    @Column
    username!: string;

    @Column
    password!: string;

    @HasMany(() => UserAnswer)
    answers!: UserAnswer[];
}