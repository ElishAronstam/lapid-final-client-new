import TasksTableHead from "../TasksTableHead/TasksTableHead";
import {Paper, Table, TableBody, TableContainer, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {selectItemCount, selectTasks} from "../../../features/redux/task/taskSelectors";
import Task from "../../../types/Task/Task";
import TaskItem from "../../TaskItem/TaskItem";
import {useSubscription} from "@apollo/client";
import {TASKS_SUBSCRIPTIONS} from "../../../graphql/task";
import {
    keywordFilterSelector,
    priorityFilterSelector,
    statusFilterSelector
} from "../../../features/redux/filter/filterSelectors";
import useActionHook from "../../../features/redux/taskHooks/useActionHook";
import ActionType from "../../../types/Enums/actionType";

const TasksTableContainer = () => {

    const statusFilter = useSelector(statusFilterSelector);
    const priorityFilter = useSelector(priorityFilterSelector);
    const keyword = useSelector(keywordFilterSelector);
    const tasks = useSelector(selectTasks);

    const {addTaskToStore, deleteTaskFromStore} = useActionHook();

    const {data: subscriptionData} = useSubscription(TASKS_SUBSCRIPTIONS, {
        onSubscriptionData: ({client, subscriptionData}) => {
            if (subscriptionData.data) {
                if (subscriptionData.data.tasksUpdated.actionType === ActionType.ADD) {
                    addTaskToStore(subscriptionData.data.tasksUpdated.item);
                } else {
                    deleteTaskFromStore(subscriptionData.data.tasksUpdated.item.id);
                }
            }
        },
        variables: {
            statusFilter: statusFilter,
            priorityFilter: priorityFilter,
            searchWord: keyword,
        },

    });


    const tasksCount = useSelector(selectItemCount);
    const titles = ["Type", "Priority", "Title", "Description", "Estimated Time", "End Time", "Review", "Status", "Time Spent", "Actions"];

    return (<>
        <Typography variant={'h5'}> There are currently: {tasksCount} Tasks</Typography>
        <TableContainer component={Paper} sx={{margin: 4}}>
            <Table>
                <TasksTableHead titles={titles}/>
                <TableBody>
                    {tasks.map((task: Task, index: number) =>
                        <TaskItem key={index} task={task}/>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </>);
};

export default TasksTableContainer;