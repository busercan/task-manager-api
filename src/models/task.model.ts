import mongose, { Document, Schema, Types } from 'mongoose';

export interface ITask extends Document {
    _id: Types.ObjectId;
    title: string;
    description?: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const TaskSchema: Schema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: false },
        completed: { type: Boolean, default: false },
    },
    {
        timestamps: true,
    }
);

export const Task = mongose.model<ITask>('Task', TaskSchema);

