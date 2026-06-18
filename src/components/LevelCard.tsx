import { useNavigate } from "react-router-dom";
import { Lock, CheckCircle, ArrowRight, Radio, Calendar } from "lucide-react";
import type { LevelConfig } from "@/data/levels";
import { useClassStatus } from "@/hooks/useClassStatus";

const LevelCard = ({ level, title, description, topics, isAvailable, nextClass }: LevelConfig) => {
  const navigate = useNavigate();
  const { isLive, isUpcoming, formattedTime } = useClassStatus(nextClass);

  const borderClass = isLive
    ? "border-green-400/60 bg-white shadow-[0_0_30px_-5px_rgb(74,222,128,0.2)]"
    : isAvailable
      ? "border-gray-100 hover:shadow-md hover:-translate-y-0.5"
      : "border-gray-100 bg-gray-50/50 opacity-60";

  return (
    <div
      className={`group relative glass-card border cursor-pointer transition-all duration-300 ${borderClass}`}
      onClick={() => isAvailable && navigate(`/level/${level}`)}
    >
      {/* Level badge */}
      <div className="absolute -top-3 left-6 flex items-center gap-2">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
          isAvailable
            ? "bg-primary text-white"
            : "bg-gray-100 text-muted-foreground"
        }`}>
          {isAvailable ? (
            <><CheckCircle className="h-3 w-3" /> Level {level}</>
          ) : (
            <><Lock className="h-3 w-3" /> Level {level}</>
          )}
        </span>
        {isLive && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500 px-3 py-1 text-xs font-semibold text-white animate-pulse">
            <Radio className="h-3 w-3" /> Live Now
          </span>
        )}
      </div>


      <div className="p-6 pt-8">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {topics.map((topic) => (
            <span key={topic} className="rounded-md bg-gray-100 px-2.5 py-1 text-xs text-muted-foreground">
              {topic}
            </span>
          ))}
        </div>

        {/* Live → Join Class button */}
        {isLive && nextClass && (
          <a
            href={nextClass.classLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98]"
          >
            <Radio className="h-4 w-4" /> Join Class Now
          </a>
        )}

        {/* Upcoming class time */}
        {!isLive && isUpcoming && isAvailable && (
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
            <Calendar className="h-3 w-3" />
            <span>{formattedTime}</span>
          </div>
        )}

        {/* View Level link */}
        {isAvailable && !isLive && (
          <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98]">
            View Level <ArrowRight className="h-4 w-4" />
          </button>
        )}

        {!isAvailable && (
          <div className="text-center text-xs text-muted-foreground py-2">Coming Soon</div>
        )}
      </div>
    </div>
  );
};

export default LevelCard;
