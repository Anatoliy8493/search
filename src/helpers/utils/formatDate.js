import moment from 'moment';
import 'moment/locale/ru';

const formatDate = (date, format) => moment(date).locale('ru').format(format);

export default formatDate;
