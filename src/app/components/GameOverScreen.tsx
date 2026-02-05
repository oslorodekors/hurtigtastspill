import { Card } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Trophy, Target, Award, TrendingUp, Monitor, Apple } from 'lucide-react';
import type { Platform } from '@/app/components/ShortcutGame';

interface GameOverScreenProps {
  score: number;
  level: number;
  correctAnswers: number;
  totalAttempts: number;
  platform: Platform;
  onRestart: () => void;
  onMainMenu: () => void;
}

const getLevelTitle = (level: number): string => {
  if (level <= 3) return 'Nybegynner';
  if (level <= 6) return 'Lærling';
  if (level <= 10) return 'Kompetent';
  if (level <= 15) return 'Dyktig';
  if (level <= 20) return 'Ekspert';
  if (level <= 25) return 'Mester';
  return 'Legende';
};

const getLevelEmoji = (level: number): string => {
  if (level <= 3) return '🌱';
  if (level <= 6) return '📚';
  if (level <= 10) return '⭐';
  if (level <= 15) return '🏆';
  if (level <= 20) return '💎';
  if (level <= 25) return '👑';
  return '🚀';
};

export function GameOverScreen({ 
  score, 
  level, 
  correctAnswers, 
  totalAttempts, 
  platform,
  onRestart, 
  onMainMenu 
}: GameOverScreenProps) {
  const accuracy = totalAttempts > 0 ? Math.round((correctAnswers / totalAttempts) * 100) : 0;
  const levelTitle = getLevelTitle(level);
  const levelEmoji = getLevelEmoji(level);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="max-w-2xl w-full p-8 space-y-6">
        <div className="text-center space-y-4">
          <div className="text-6xl">{levelEmoji}</div>
          <h1 className="text-4xl font-bold text-gray-900">Spill slutt!</h1>
          <p className="text-xl text-gray-600">Du nådde nivå {level} som {levelTitle}</p>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-600" />
            <h2 className="text-3xl font-bold text-gray-900">Sluttpoeng: {score}</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4 text-center border-2 border-gray-200">
            <Award className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{level}</p>
            <p className="text-sm text-gray-600">Nivå</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border-2 border-gray-200">
            <Target className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{accuracy}%</p>
            <p className="text-sm text-gray-600">Treffsikkerhet</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border-2 border-gray-200">
            <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{correctAnswers}</p>
            <p className="text-sm text-gray-600">Riktige svar</p>
          </div>

          <div className="bg-white rounded-lg p-4 text-center border-2 border-gray-200">
            {platform === 'pc' ? (
              <Monitor className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            ) : (
              <Apple className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            )}
            <p className="text-2xl font-bold text-gray-900">{totalAttempts}</p>
            <p className="text-sm text-gray-600">Totale forsøk</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 space-y-3">
          <h3 className="text-lg font-semibold text-gray-900 text-center">Din prestasjon</h3>
          <div className="space-y-2">
            {level >= 25 && (
              <Badge className="w-full justify-center py-2 bg-yellow-500 text-white text-base">
                👑 Utrolig! Du er en sann Hurtigtast-Legende!
              </Badge>
            )}
            {level >= 20 && level < 25 && (
              <Badge className="w-full justify-center py-2 bg-purple-600 text-white text-base">
                💎 Fantastisk! Du er en Hurtigtast-Ekspert!
              </Badge>
            )}
            {level >= 15 && level < 20 && (
              <Badge className="w-full justify-center py-2 bg-blue-600 text-white text-base">
                🏆 Flott! Du er virkelig dyktig!
              </Badge>
            )}
            {level >= 10 && level < 15 && (
              <Badge className="w-full justify-center py-2 bg-green-600 text-white text-base">
                ⭐ Bra jobbet! Du er kompetent!
              </Badge>
            )}
            {level < 10 && (
              <Badge className="w-full justify-center py-2 bg-gray-600 text-white text-base">
                📚 Godt forsøk! Øv mer for å bli bedre!
              </Badge>
            )}
            {accuracy >= 90 && (
              <p className="text-center text-green-700 font-semibold">
                ✨ Imponerende treffsikkerhet på {accuracy}%!
              </p>
            )}
            {accuracy >= 70 && accuracy < 90 && (
              <p className="text-center text-blue-700 font-semibold">
                👍 God treffsikkerhet på {accuracy}%!
              </p>
            )}
          </div>
        </div>

        <div className="flex gap-4">
          <Button 
            onClick={onRestart}
            size="lg"
            className="flex-1 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            🔄 Spill igjen
          </Button>
          <Button 
            onClick={onMainMenu}
            size="lg"
            variant="outline"
            className="flex-1 text-lg"
          >
            🏠 Hovedmeny
          </Button>
        </div>

        {level < 10 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
            <p className="text-sm text-yellow-800">
              💡 <strong>Tips:</strong> Jo mer du øver, desto bedre blir du. Prøv å huske mønstrene!
            </p>
          </div>
        )}
      </Card>
    </div>
  );
}
