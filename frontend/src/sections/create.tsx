import { useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Alert, AlertTitle } from "../components/ui/alert";
import axios from 'axios';
import { backendPath } from "../endpoints";

interface SubmitNewUserFeedbackProps {
  message: string;
  type: "default" | "success" | "error" | "warning";
}

export const CreateSection = () => {

    const [createName, setCreateName] = useState<string>("");
    const [createAge, setCreateAge] = useState<string>("");
    const [createAddress, setCreateAddress] = useState<string>("");
    const [isCreateNewUserButtonEnabled, setIsCreateNewUserButtonEnabled] = useState<boolean>(true);
    const feedbackTextColorMap = {
        default: "text-white",
        success: "text-green-500",
        error: "text-red-500",
        warning: "text-yellow-500"
    };
    const [submitNewUserFeedback, setSubmitNewUserFeedback] = useState<SubmitNewUserFeedbackProps>({
        message: "",
        type: "default"
    })

    const createInputs = [
        {
            Label: "Name",
            Name: "create_name",
            Type: "text",
            Value: createName,
            SetValue: setCreateName
        },
        {
            Label: "Age",
            Name: "create_age",
            Type: "number",
            Value: createAge,
            SetValue: setCreateAge
        },
        {
            Label: "Address",
            Name: "create_address",
            Type: "text",
            Value: createAddress,
            SetValue: setCreateAddress
        }
    ];

    const handleSubmitCreateUser = async () => {
        
        // Clears the feedback and disable button
        setSubmitNewUserFeedback({
            message: "Submitting...",
            type: "default"
        });
        setIsCreateNewUserButtonEnabled(false);

        // Validates if age is 0 or negative
        if (parseInt(createAge) < 1) {
            setSubmitNewUserFeedback({
                message: "Invalid Age",
                type: "error"
            }) ;
            setIsCreateNewUserButtonEnabled(true);
            return;
        }

        // Name should not contain a number
        if (createName.match(/[0-9]/)) {
            setSubmitNewUserFeedback({
                message: "Name should not contain a number",
                type: "error"
            }) ;
            setIsCreateNewUserButtonEnabled(true);
            return;
        }
        
        // If passed
        try {
            const res = await axios.post(`${backendPath}/users/new`, {
                name: createName,
                age: createAge,
                address: createAddress
            });
            
            setSubmitNewUserFeedback({
                message: res.data.message,
                type: res.data.type
            })

            setCreateName("");
            setCreateAge("");
            setCreateAddress("");
            
        } catch (error) {
            setSubmitNewUserFeedback({
                message: `Failed to create new user: ${error}.`,
                type: "error"
            });
        } finally {
            setIsCreateNewUserButtonEnabled(true);
        }
    }

    return (
        <>
            <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                Create
                </h3>
                <div className="py-4 flex flex-col gap-4">
                {createInputs.map((item, index) => (
                    <div className="flex flex-col md:flex-row gap-2" key={index}>
                    <Label htmlFor={item.Name}>{item.Label}: </Label>
                    <Input 
                        name={item.Name}
                        value={item.Value}
                        onChange={(e) => item.SetValue(e.target.value)}
                        className="bg-transparent text-white rounded px-3 py-2 w-full selection:bg-blue-600"
                        type={item.Type}
                        placeholder={`Enter ${item.Label}`}
                    />
                    </div>
                ))}
                {submitNewUserFeedback.message && (
                    <Alert className="bg-transparent">
                    <AlertTitle className={`text-center ${feedbackTextColorMap[submitNewUserFeedback.type]}`}>
                        {submitNewUserFeedback.message}
                    </AlertTitle>
                    </Alert>
                )}
                <Button
                    onClick={handleSubmitCreateUser}
                    variant="secondary"
                    className="hover:cursor-pointer"
                    disabled={!isCreateNewUserButtonEnabled}
                >Create User</Button>
                </div>
        </>
    )
}