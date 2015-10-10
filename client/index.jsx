/**
 * Created by eriq on 10/10/15.
 */
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from '../shared/routes';

const history = createBrowserHistory();

ReactDOM.render(
   <Router children={routes} history={history}/>,
   document.getElementById('react-view')
);