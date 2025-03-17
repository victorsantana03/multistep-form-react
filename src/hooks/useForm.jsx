import { useState } from "react";

export function useForm(steps){
    
    const [currentStep, setCurrentStep] = useState(0)

    const currentComponent = steps[currentStep]

    const lastStep = currentStep + 1 === steps.length
    const firtsStep = currentStep === 0

    function changeStep(i, e) {
        e.preventDefault()

        if(i < 0 || i >= steps.length) return

        setCurrentStep(i)
    }
    return{
        currentStep,
        currentComponent,
        changeStep,
        lastStep,
        firtsStep
    }
}