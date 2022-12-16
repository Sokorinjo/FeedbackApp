import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
import { v4 as uuidv4 } from "uuid";


const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter(item => {
                return item.id !== id
            })
            )
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = parseInt(uuidv4());
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback)
    }

    //update feedback
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map(item=> item.id === id ? {...item, ...updItem} : item))
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item: item,
            edit: true,
        })
        console.log(feedbackEdit)
    }




    return (
        <FeedbackContext.Provider value={{ feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updateFeedback}}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext;