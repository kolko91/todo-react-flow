import { connect } from 'react-redux';
import Link from 'components/Link';

import type { State, Dispatch } from 'types';
import type { Filter } from 'types/filter';
import { setFilter } from 'actions/filter';

type Props = {
  filter: Filter
};

const mapStateToProps = (state: State, props: Props) => ({ active: state.filter === props.filter });

const mapDispatchToProps = (dispatch: Dispatch, props: Props) => ({
  onClick: () => {
    dispatch(setFilter(props.filter));
  },
});

const connector = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default connector(Link);
