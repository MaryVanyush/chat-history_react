import { MessageHistoryModel } from '../../models/MessageHistoryModel';
import { FromModel } from '../../models/FromModel';

interface ResponseProps {
    from: FromModel,
    message: MessageHistoryModel
}

export const Typing = ({ from, message }: ResponseProps) => {

    return (
        <li>
            <div className="message-data">
            <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
            <span className="message-data-time">{message.time}</span>
            </div>
            <div>
                <i className="fa fa-circle online"></i>
                <i className="fa fa-circle online typing2"></i>
                <i className="fa fa-circle online typing3"></i>
            </div>
        </li>
    )
}
