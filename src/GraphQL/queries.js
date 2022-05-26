import { gql } from "@apollo/client";

export const GET_TODOLIST = gql`
query MyQuery {
  todoList {
    id
    is_done
    title
  }
}
`;

export const INSERT_TODOLIST = gql`
  mutation MyMutation($object: todoList_insert_input = {}) {
    insert_todoList_one(object: $object) {
      id
     
    
    }
  }
`;

export const DELETE_TODOLIST = gql`
  mutation MyMutation($id: Int!) {
    delete_todoList_by_pk(id: $id) {
      id
    }
  }
`;

export const UPDATE_TODOLIST = gql`
  mutation MyMutation($id: Int!, $is_done: Boolean!) {
    update_todoList_by_pk(
      pk_columns: { id: $id }
      _set: { is_done: $is_done }
    ) {
      id
    }
  }
`;

export const SUBSCRIPTION_TODOLIST = gql`
  subscription MySubscription {
    todoList {
      id
      is_done
      title
    }
  }
`;

