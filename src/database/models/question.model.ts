import { Optional } from "sequelize"
import { Table, Column, Model, PrimaryKey, HasMany } from 'sequelize-typescript';
import UserAnswer from "./userAnswer.model";

interface QuestionAttributes {
    id: number;
    questionType: "multiple choice" | "text field";
    question: string;
    options: string | null;
}

interface QuestionCreationAttributes extends Optional<QuestionAttributes, "id"> {}

@Table({
    timestamps: false
})
export default class Question extends Model<QuestionAttributes, QuestionCreationAttributes> {

    @PrimaryKey
    @Column
    declare id: number;

    @Column
    declare questionType: "multiple choice" | "text field";

    @Column
    declare question: string;

    @Column
    declare options?: string;

    // options getter
    get optionsArray(): string[] {
        return this.options ? JSON.parse(this.options) : null;
    }

    // options setter
    set optionsArray(value: string[]) {
        this.options = JSON.stringify(value);
        this.save();
    }

    @HasMany(() => UserAnswer)
    declare answers: UserAnswer[];
}