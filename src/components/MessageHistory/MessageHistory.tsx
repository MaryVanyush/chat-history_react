import './MessageHistory.css';
import { MessageHistoryModel } from '../../models/MessageHistoryModel';
import { Message } from '../Message/Message';
import { Response } from '../Response/Response';
import { Typing } from '../Typing/Typing';
import 'font-awesome/css/font-awesome.min.css';

interface MessageHistoryProps {
    list: MessageHistoryModel[];
}

export const  MessageHistory = ({list}: MessageHistoryProps) => {
    if(list.length === 0 ) return;

    return (
        <>
        <ul>
            {list.map(item => 
                item.type === 'response' ?
                <Response from = {item.from} message = {item}  key ={item.id}/> :
                item.type === 'message' ?
                <Message from = {item.from} message = {item}  key ={item.id}/> :
                <Typing from = {item.from} message = {item}  key ={item.id}/> 
            )}
        </ul>
        </>
    )
}
