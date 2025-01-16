import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface QuizScoreProps {
  correctAnswers: number;
  totalQuestions: number;
}

export default function QuizScore({
  correctAnswers,
  totalQuestions,
}: QuizScoreProps) {
  const score = (correctAnswers / totalQuestions) * 100;
  const roundedScore = Math.round(score);

  const getMessage = () => {
    if (score === 100) return "Pontuação perfeita! Parabéns!";
    if (score >= 80) return "Ótimo trabalho! Você foi excelente!";
    if (score >= 60) return "Bom esforço! Você está no caminho certo.";
    if (score >= 40) return "Nada mal, mas há espaço para melhorias.";
    return "Continue praticando, você vai melhorar!";
  };

  return (
    <Card className="w-full">
      <CardContent className="space-y-4 p-8">
        <div className="text-center">
          <p className="text-4xl font-bold">{roundedScore}%</p>
          <p className="text-sm text-muted-foreground">
            {correctAnswers} de {totalQuestions} corretas
          </p>
        </div>
        <Progress value={score} />
        <p className="text-center">{getMessage()}</p>
      </CardContent>
    </Card>
  );
}
