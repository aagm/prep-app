import React from 'react';
import { Link } from 'react-router';

import metadata from 'json!../../../metadata.json';

import ChartCard from '../../Cards/ChartCard';

class DashboardsHome extends React.Component {

  componentWillMount() {
    if (metadata[0].widgets) {
      for (let i = 0, metaLength = metadata[0].widgets.length; i < metaLength; i++) {
        this.props.getWidgetBySlug(metadata[0].widgets[i].slug);
      }
    }
  }

  render() {
    this.widget1 = this.props.widgets[metadata[0].widgets[0].slug];
    this.widget2 = this.props.widgets[metadata[0].widgets[1].slug];
    this.widget3 = this.props.widgets[metadata[0].widgets[2].slug];
    return (
      <div>
        <div className="row">
          <div className="column small-12 medium-8">
            <h2 className="-left">Assembling the information you need</h2>
            <Link to="/dashboards">Go to dashboards</Link>
            <p>Dashboards are a collection of data, insight and tools that users compile to support their climate resilience and preparedness planning. View some of the dashboards that others have create, or create your own to track to key issues in your area.</p>
          </div>
        </div>
        <div className="row -float">
          {this.widget1 && this.widget1.widget_config &&
            <div className="column small-12 medium-8">
              <ChartCard
                size="large"
                title={this.widget1.title}
                legend={metadata[0].widgets[0].category}
                data={this.widget1}
              />
            </div>
          }
          {this.widget2 && this.widget2.widget_config &&
            <div className="column small-12 medium-4">
              <ChartCard
                size="short"
                title={this.widget2.title}
                legend={metadata[0].widgets[1].category}
                data={this.widget2}
              />
            </div>
          }
          {this.widget3 && this.widget3.widget_config &&
            <div className="column small-12 medium-4">
              <ChartCard
                size="short"
                background
                title={this.widget3.title}
                legend={metadata[0].widgets[2].category}
                data={this.widget3}
              />
            </div>
          }
        </div>
      </div>
    );
  }
}

DashboardsHome.propTypes = {
  getWidgetBySlug: React.PropTypes.func.isRequired,
  widgets: React.PropTypes.object.isRequired
};

export default DashboardsHome;