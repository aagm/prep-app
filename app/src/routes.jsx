import React from 'react';
import { connect } from 'react-redux';
import useScroll from 'react-router-scroll';
import { IndexRoute, IndexRedirect, Router, Route, applyRouterMiddleware } from 'react-router';
import ContainerPage from './containers/pages/ContainerPage';
import HomePage from './components/pages/HomePage';
import DataPage from './containers/pages/DataPage';
import DataDetailPage from './containers/pages/DataDetailPage';
import DashboardsPage from './containers/pages/DashboardsPage';
import DashboardDetailPage from './containers/pages/DashboardDetailPage';
import InsightsPage from './containers/pages/InsightsPage';
import InsightDetailPage from './containers/pages/InsightDetailPage';
import PartnersPage from './components/pages/PartnersPage';
import AboutPage from './components/pages/AboutPage';
import FAQsPage from './components/pages/FAQsPage';
import ContactPage from './components/pages/ContactPage';

function shouldUpdateScroll(prevRouterProps, { location }) {
  /**
   * Return whether the two pages match the regex and have the same matching
   * regex parameters
   * @param  {regex}  regex
   * @return {Boolean}
   */
  function isSamePage(regex) {
    const pathname = (prevRouterProps && prevRouterProps.location.pathname) || '';
    const nextPathname = location.pathname;

    /* We first check if the pages are concerned by the regex. If not, the route
     * isn't matching */
    const isPathnameConcerned = regex.test(pathname);
    const isNextPathnameConcerned = regex.test(nextPathname);

    if (!isPathnameConcerned || !isNextPathnameConcerned) {
      return false;
    }

    /* We then get the matching regex params and return false if there isn't
     * any */
    const routeParams = pathname.match(regex);
    const nextRouteParams = nextPathname.match(regex);

    if (!routeParams || !nextRouteParams) {
      return false;
    }

    /* We remove the first element of the arrays as it is the whole matched
     * string (i.e. the route) */
    if (routeParams.length) {
      routeParams.splice(0, 1);
    }
    if (nextRouteParams.length) {
      nextRouteParams.splice(0, 1);
    }

    const paramsCount = Math.min(routeParams.length, nextRouteParams.length);

    let doesParamsMatch = true;
    for (let i = 0, j = paramsCount; i < j; i++) {
      if (routeParams[i] !== nextRouteParams[i]) {
        doesParamsMatch = false;
        break;
      }
    }

    return doesParamsMatch;
  }

  /* Here we define all the routes for which we don't want to scroll to top if
   * both the old path and the new one match (i.e. if the global regex and the
   * regex params match the two paths) */
  const regexes = [
    /\/dashboards\/((?:[A-z]|[1-9]|-)+)(?:\/(?:.*))?/,
    /\/insights\/((?:[A-z]|[1-9]|-)+)/
  ];

  for (let i = 0, j = regexes.length; i < j; i++) {
    if (isSamePage(regexes[i])) {
      return false;
    }
  }

  return true;
}

function Routes(props) {
  return (
    <Router
      history={props.history}
      render={applyRouterMiddleware(useScroll(shouldUpdateScroll))}
    >
      <Route path="/" component={ContainerPage}>
        <IndexRoute component={HomePage} />
        <Route path="data">
          <IndexRedirect to="map" />
          <Route path="map(/:lat)(/:lng)(/:zoom)" component={DataPage} />
          <Route path="dataset/:slug" component={DataDetailPage} />
        </Route>
        <Route path="dashboards">
          <IndexRoute component={DashboardsPage} />
          <Route path=":slug(/:tab)" component={DashboardDetailPage} />
        </Route>
        <Route path="insights">
          <IndexRoute component={InsightsPage} />
          <Route path=":slug" component={InsightDetailPage} />
        </Route>
        <Route path="partners" component={PartnersPage} />
        <Route path="about" component={AboutPage} />
        <Route path="faqs" component={FAQsPage} />
        <Route path="contact" component={ContactPage} />
      </Route>
    </Router>
  );
}

Routes.propTypes = {
  history: React.PropTypes.object.isRequired
};

const mapStateToProps = () => ({});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
