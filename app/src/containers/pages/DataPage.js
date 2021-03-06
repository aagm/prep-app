import { connect } from 'react-redux';
import DataPage from '../../components/pages/DataPage';

import { getDatasets } from '../../actions/datasets';
import { setModalUnderDevelop } from '../../actions/modal';

const mapStateToProps = (state, location) => ({
  currentPage: location.route.path,
  data: state.datasets,
  modalOpen: state.modal.underDevelop
});

const mapDispatchToProps = (dispatch) => ({
  getDatasets: (defaultActiveLayers) => dispatch(getDatasets(defaultActiveLayers)),
  setModalUnderDevelop: (status) =>
    dispatch(setModalUnderDevelop(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(DataPage);
