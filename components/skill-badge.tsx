interface SkillBadgeProps {
    name: string
  }
  
  export function SkillBadge({ name }: SkillBadgeProps) {
    return (
      <div className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-full text-sm font-medium font-serif">
        {name}
      </div>
    )
  }
  
  