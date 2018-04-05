import { connect } from 'react-redux';
import Comment from './Comment';
import { thumbUpComment, thumbDownComment} from './actions';

const mapDispatchToProps = dispatch => ({
    thumbUp: (id) => dispatch(thumbUpComment(id)),
    thumbDown: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);
