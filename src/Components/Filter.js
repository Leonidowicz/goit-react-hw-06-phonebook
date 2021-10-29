import { connect } from 'react-redux';
import * as actions from '../Redux/Form/form-actions';

//------------------------------------------------------------------------

const Filter = ({ filter, filt }) => {
  return (
    <label>
      Find phone number by name
      <input name="filter" type="text" value={filter} onChange={filt} />
    </label>
  );
};

//------------------------------------------------------------------------

const mapStateToProps = (state) => ({ filter: state.filt });

const mapDispatchToProps = (dispatch) => {
  return {
    filt: (e) => dispatch(actions.filt(e.target.value)),
  };
};

//--------------------------------------------------------------------------

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
