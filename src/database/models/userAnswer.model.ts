import { Optional } from "sequelize"
import { Table, Column, Model, PrimaryKey, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from "./user.model"
import Question from "./question.model"

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
    declare id: number;

    @ForeignKey(() => User)
    @Column
    declare userId: number;

    @ForeignKey(() => Question)
    @Column
    declare questionId: number;

    @BelongsTo(() => User)
    declare user: User;

    @BelongsTo(() => Question)
    declare question: Question;

    @Column
    declare answer: string;
}