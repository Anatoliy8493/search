import moment from 'moment';
import 'moment/locale/ru';

const formatDate = (date, format) => moment().locale('ru').format(format);

export default formatDate;
