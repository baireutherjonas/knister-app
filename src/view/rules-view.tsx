function RuleRow({label, value}:{label: string, value: string}) {
    return <div className="flex flex-row gap-2">
        <div className="flex-5">{label}</div>
        <div>=</div>
        <div className="flex-1">{value}</div>
    </div>
}

export function RulesView() {

    return <div className="flex flex-col gap-4">
        <div className="flex flex-col">
            <RuleRow label="2er" value="1"/>
            <RuleRow label="3er" value="3"/>
            <RuleRow label="4er" value="6"/>
            <RuleRow label="5er" value="10"/>
        </div>

        <div className="flex flex-col">
            <RuleRow label="2er + 2er" value="3"/>
            <RuleRow label="Full House" value="8"/>
            <RuleRow label="Str. mit 7" value="8"/>
            <RuleRow label="Str. ohne 7" value="12"/>
        </div>
    </div>
}