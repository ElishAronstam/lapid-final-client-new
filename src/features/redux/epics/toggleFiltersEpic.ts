import {Epic, ofType} from 'redux-observable';
import {switchMap,catchError} from 'rxjs/operators';
import {setTasks} from "../task/taskSlice";
import {FILTER_TASKS} from '../../../graphql/task';
import {client} from '../../../index';
import {of} from 'rxjs';

const toggleFiltersEpic: Epic = (action$, state$) =>
    action$.pipe(
        ofType('filters/toggleFilter'),
        switchMap(() =>
            client.query({
                query: FILTER_TASKS,
                variables: {
                    statusFilter: state$.value.filterSlice.filterTaskByOpenStatus,
                    priorityFilter: state$.value.filterSlice.filterTaskByHighPriority,
                    searchWord: state$.value.filterSlice.searchQuery,
                },
                fetchPolicy: 'network-only',
            })
        ),
        switchMap(response => {
            return of(setTasks(response.data.filterTasks));
        }),
        catchError(err => Promise.resolve({ type: 'Error', message: err.message }))
    );

export default toggleFiltersEpic;

