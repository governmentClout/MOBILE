import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ErrorReducer from './ErrorReducer';
import MessageReducer from './MessageReducer';
import ViewReducer from './ViewReducer';
import LoadingReducer from './LoadingReducer';
import ProfileReducer from './ProfileReducer';
import PostReducer from './PostReducer';
import LocationReducer from './LocationReducer';
import CommentReducer from './CommentReducer';
import ShareReducer from './ShareReducer';
import RequestUpgradeReducer from './RequestUpgradeReducer';
import PollReducer from './PollReducer';
import FriendReducer from './FriendReducer';
import ArticleReducer from './ArticleReducer';

export default combineReducers({
    auth: AuthReducer,
    errors: ErrorReducer,
    message: MessageReducer,
    view: ViewReducer,
    loading: LoadingReducer,
    profile: ProfileReducer,
    post: PostReducer,
    poll: PollReducer,
    location: LocationReducer,
    comment: CommentReducer,
    share: ShareReducer,
    friend: FriendReducer,
    article: ArticleReducer,
    requestupgrade: RequestUpgradeReducer
});