import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function TitleView() {
    const navigate = useNavigate()
    return <Button variant={'outline'} onClick={() => navigate('/')}>Knister App</Button>
}