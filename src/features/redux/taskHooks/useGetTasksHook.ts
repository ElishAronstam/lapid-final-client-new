import {useDispatch, useSelector} from "react-redux";
import {setTasks} from "../task/taskSlice";
import {useSubscription} from '@apollo/client';
import {ALL_TASKS, TASKS_SUBSCRIPTIONS} from '../../../graphql/task';
import {client} from "../../../index";
import {keywordFilterSelector, priorityFilterSelector, statusFilterSelector} from "../filter/filterSelectors";
import {selectTasks} from "../task/taskSelectors";

const useGetTasksHook = () => {

const dispatch = useDispatch();

    client.query({
        query: ALL_TASKS,
        fetchPolicy: 'network-only',
    }).then((result) => {
        if (result.data) {
            dispatch(setTasks(result.data.tasks));
        }
    });
};

export default useGetTasksHook;
