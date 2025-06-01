import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export function TitleView() {
    const navigate = useNavigate()
    return <Button onClick={() => navigate('/')}>Knister App</Button>
}