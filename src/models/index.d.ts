import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ReadMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerTodo = {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly isDone: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTodo = {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly isDone: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Todo = LazyLoading extends LazyLoadingDisabled ? EagerTodo : LazyTodo

export declare const Todo: (new (init: ModelInit<Todo, TodoMetaData>) => Todo) & {
  copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

type EagerRead = {
  readonly id: string;
  readonly todoId: string;
  readonly readerId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRead = {
  readonly id: string;
  readonly todoId: string;
  readonly readerId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Read = LazyLoading extends LazyLoadingDisabled ? EagerRead : LazyRead

export declare const Read: (new (init: ModelInit<Read, ReadMetaData>) => Read) & {
  copyOf(source: Read, mutator: (draft: MutableModel<Read, ReadMetaData>) => MutableModel<Read, ReadMetaData> | void): Read;
}