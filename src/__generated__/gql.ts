/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nquery Tasks {\n  tasks {\n    id\n    title\n    description\n    estimatedTime\n    status\n    priority\n    review\n    timeSpent\n    endTime\n  }\n}\n  ": types.TasksDocument,
    "\n  mutation createTask(\n    $title: String!\n    $description: String!\n    $estimatedTime: String!\n    $status: String!\n    $priority: String!\n    $review: String\n    $timeSpent:String\n    $endTime: String\n\n  ) {\n    createTask(\n      taskInput: {\n        title: $title\n        description: $description\n        estimatedTime: $estimatedTime\n        status: $status\n        priority: $priority\n        review: $review\n        timeSpent: $timeSpent\n        endTime: $endTime\n      }\n    ) {\n        id\n        title\n        description\n        estimatedTime\n        status\n        priority\n        review\n        timeSpent\n        endTime\n    }\n  }\n": types.CreateTaskDocument,
    "\n   mutation deleteTask($taskId:String!){\n     deleteTask(taskId:$taskId)\n     }\n  ": types.DeleteTaskDocument,
    "\n  query FilterTasks(\n     $statusFilter:Boolean\n     $priorityFilter:Boolean\n     $searchWord:String\n  ) {\n    filterTasks(\n      filters: {\n          statusFilter:$statusFilter\n          priorityFilter:$priorityFilter\n          searchWord:$searchWord\n      }\n    ) {\n        id\n        title\n        description\n        estimatedTime\n        status\n        priority\n        review\n        timeSpent\n        endTime\n    }\n  }\n  \n": types.FilterTasksDocument,
    "\nsubscription TasksUpdated(\n     $statusFilter:Boolean\n     $priorityFilter:Boolean\n     $searchWord:String\n  ) {\n  tasksUpdated (filters: {\n          statusFilter:$statusFilter\n          priorityFilter:$priorityFilter\n          searchWord:$searchWord\n      }\n    ) {\n    item {\n    id\n    title\n    description\n    estimatedTime\n    status\n    priority\n    review\n    timeSpent\n    endTime\n    },\n     actionType\n  }\n}\n": types.TasksUpdatedDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery Tasks {\n  tasks {\n    id\n    title\n    description\n    estimatedTime\n    status\n    priority\n    review\n    timeSpent\n    endTime\n  }\n}\n  "): (typeof documents)["\nquery Tasks {\n  tasks {\n    id\n    title\n    description\n    estimatedTime\n    status\n    priority\n    review\n    timeSpent\n    endTime\n  }\n}\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation createTask(\n    $title: String!\n    $description: String!\n    $estimatedTime: String!\n    $status: String!\n    $priority: String!\n    $review: String\n    $timeSpent:String\n    $endTime: String\n\n  ) {\n    createTask(\n      taskInput: {\n        title: $title\n        description: $description\n        estimatedTime: $estimatedTime\n        status: $status\n        priority: $priority\n        review: $review\n        timeSpent: $timeSpent\n        endTime: $endTime\n      }\n    ) {\n        id\n        title\n        description\n        estimatedTime\n        status\n        priority\n        review\n        timeSpent\n        endTime\n    }\n  }\n"): (typeof documents)["\n  mutation createTask(\n    $title: String!\n    $description: String!\n    $estimatedTime: String!\n    $status: String!\n    $priority: String!\n    $review: String\n    $timeSpent:String\n    $endTime: String\n\n  ) {\n    createTask(\n      taskInput: {\n        title: $title\n        description: $description\n        estimatedTime: $estimatedTime\n        status: $status\n        priority: $priority\n        review: $review\n        timeSpent: $timeSpent\n        endTime: $endTime\n      }\n    ) {\n        id\n        title\n        description\n        estimatedTime\n        status\n        priority\n        review\n        timeSpent\n        endTime\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n   mutation deleteTask($taskId:String!){\n     deleteTask(taskId:$taskId)\n     }\n  "): (typeof documents)["\n   mutation deleteTask($taskId:String!){\n     deleteTask(taskId:$taskId)\n     }\n  "];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query FilterTasks(\n     $statusFilter:Boolean\n     $priorityFilter:Boolean\n     $searchWord:String\n  ) {\n    filterTasks(\n      filters: {\n          statusFilter:$statusFilter\n          priorityFilter:$priorityFilter\n          searchWord:$searchWord\n      }\n    ) {\n        id\n        title\n        description\n        estimatedTime\n        status\n        priority\n        review\n        timeSpent\n        endTime\n    }\n  }\n  \n"): (typeof documents)["\n  query FilterTasks(\n     $statusFilter:Boolean\n     $priorityFilter:Boolean\n     $searchWord:String\n  ) {\n    filterTasks(\n      filters: {\n          statusFilter:$statusFilter\n          priorityFilter:$priorityFilter\n          searchWord:$searchWord\n      }\n    ) {\n        id\n        title\n        description\n        estimatedTime\n        status\n        priority\n        review\n        timeSpent\n        endTime\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nsubscription TasksUpdated(\n     $statusFilter:Boolean\n     $priorityFilter:Boolean\n     $searchWord:String\n  ) {\n  tasksUpdated (filters: {\n          statusFilter:$statusFilter\n          priorityFilter:$priorityFilter\n          searchWord:$searchWord\n      }\n    ) {\n    item {\n    id\n    title\n    description\n    estimatedTime\n    status\n    priority\n    review\n    timeSpent\n    endTime\n    },\n     actionType\n  }\n}\n"): (typeof documents)["\nsubscription TasksUpdated(\n     $statusFilter:Boolean\n     $priorityFilter:Boolean\n     $searchWord:String\n  ) {\n  tasksUpdated (filters: {\n          statusFilter:$statusFilter\n          priorityFilter:$priorityFilter\n          searchWord:$searchWord\n      }\n    ) {\n    item {\n    id\n    title\n    description\n    estimatedTime\n    status\n    priority\n    review\n    timeSpent\n    endTime\n    },\n     actionType\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;