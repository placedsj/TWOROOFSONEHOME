export const calculateSunriseProgress = (targetDate: string = "2028-03-01") => {
  const start = new Date("2024-11-12"); // Harper's Birthday / Effective Start
  const end = new Date(targetDate);
  const now = new Date();
  
  const totalDuration = end.getTime() - start.getTime();
  const elapsed = now.getTime() - start.getTime();

  let progress = 0;
  if (now > start) {
    progress = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);
  }

  const monthsRemaining = Math.ceil((end.getTime() - now.getTime()) / (1000 * 60 * 60 * 24 * 30.44));

  return {
    percentage: parseFloat(progress.toFixed(1)),
    monthsRemaining: Math.max(0, monthsRemaining),
    isActive: now >= start,
    isComplete: now >= end
  };
};

export const calculateJubileeGraceValue = (percentage: number) => {
  const totalDebt = 50000;
  const earnedValue = (percentage / 100) * totalDebt;
  const remaining = totalDebt - earnedValue;
  
  return {
    remaining: Math.round(remaining),
    earned: Math.round(earnedValue)
  };
};

export const calculateJaneBlock = (startDate: string = "2024-11-12") => {
  const start = new Date(startDate);
  const now = new Date();
  const duration = 1000 * 60 * 60 * 24 * 180; // 6 months
  const elapsed = now.getTime() - start.getTime();
  
  const progress = Math.min(Math.max((elapsed / duration) * 100, 0), 100);
  const daysRemaining = Math.ceil((duration - elapsed) / (1000 * 60 * 60 * 24));

  return {
    percentage: Math.round(progress),
    daysRemaining: Math.max(0, daysRemaining),
    isComplete: progress >= 100
  };
};