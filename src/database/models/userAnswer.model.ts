import { Optional } from "sequelize"
import { Table, Column, Model, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from "./user.model"

interface UserAnswerAttributes {
    id: number;
    userId: number;
    user: User;
    questionId: number;
    answer: string;
}

interface UserAnswerCreationAttributes extends Optional<UserAnswerAttributes, "id"> {}

@Table({
    timestamps: false
})
export default class UserAnswer extends Model<UserAnswerAttributes, UserAnswerCreationAttributes> {

    @PrimaryKey
    @Column
    id!: number;

    @ForeignKey(() => User)
    @Column
    userId!: number;

    @BelongsTo(() => User)
    user!: User;

    @Column
    questionId!: number;

    @Column
    answer!: string;
}