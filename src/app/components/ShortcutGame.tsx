import { useState, useEffect, useCallback } from 'react';
import { ShortcutDisplay } from '@/app/components/ShortcutDisplay';
import { VisualFeedback } from '@/app/components/VisualFeedback';
import { ScoreBoard } from '@/app/components/ScoreBoard';
import { GameOverScreen } from '@/app/components/GameOverScreen';
import { ModeSelector } from '@/app/components/ModeSelector';
import { LevelUpNotification } from '@/app/components/LevelUpNotification';
import { PixelCloud, PixelGrass, PixelTree, PixelFlower } from '@/app/components/PixelArt';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Monitor, Apple, Heart } from 'lucide-react';

export type Platform = 'pc' | 'mac';
export type GameMode = 'learning' | 'challenge';
export type VisualizationType = 'copy' | 'paste' | 'cut' | 'undo' | 'redo' | 'save' | 'search' | 'selectAll' | 'new' | 'switchWindow' | 'desktop' | 'taskManager' | 'closeTab' | 'newTab' | 'reopenTab' | 'nextTab' | 'prevTab' | 'print' | 'refresh' | 'bookmark' | 'addressBar' | 'rename' | 'deleteWord' | 'quit';

export interface Shortcut {
  id: string;
  pcKeys: string[];
  macKeys: string[];
  description: string;
  pcAction: string;
  macAction: string;
  visualization: VisualizationType;
  difficulty: 1 | 2 | 3 | 4 | 5; // 1 = lett, 5 = vanskelig
}

const shortcuts: Shortcut[] = [
  // Level 1 - Grunnleggende (mest brukte)
  { id: '1', pcKeys: ['Control', 'c'], macKeys: ['Meta', 'c'], description: 'Kopier', pcAction: 'Ctrl+C', macAction: '⌘+C', visualization: 'copy', difficulty: 1 },
  { id: '2', pcKeys: ['Control', 'v'], macKeys: ['Meta', 'v'], description: 'Lim inn', pcAction: 'Ctrl+V', macAction: '⌘+V', visualization: 'paste', difficulty: 1 },
  { id: '3', pcKeys: ['Control', 'x'], macKeys: ['Meta', 'x'], description: 'Klipp ut', pcAction: 'Ctrl+X', macAction: '⌘+X', visualization: 'cut', difficulty: 1 },
  { id: '4', pcKeys: ['Control', 'z'], macKeys: ['Meta', 'z'], description: 'Angre', pcAction: 'Ctrl+Z', macAction: '⌘+Z', visualization: 'undo', difficulty: 1 },
  { id: '6', pcKeys: ['Control', 's'], macKeys: ['Meta', 's'], description: 'Lagre', pcAction: 'Ctrl+S', macAction: '⌘+S', visualization: 'save', difficulty: 1 },
  { id: '25', pcKeys: ['Control', 'b'], macKeys: ['Meta', 'b'], description: 'Fet skrift', pcAction: 'Ctrl+B', macAction: '⌘+B', visualization: 'copy', difficulty: 1 },
  
  // PC-only Level 1
  { id: '53pc', pcKeys: ['Home'], macKeys: [], description: 'Gå til linjens start', pcAction: 'Home', macAction: '', visualization: 'undo', difficulty: 1 },
  { id: '54pc', pcKeys: ['End'], macKeys: [], description: 'Gå til linjens slutt', pcAction: 'End', macAction: '', visualization: 'redo', difficulty: 1 },
  { id: '55pc', pcKeys: ['PageUp'], macKeys: [], description: 'Bla opp en side', pcAction: 'Page Up', macAction: '', visualization: 'copy', difficulty: 1 },
  { id: '56pc', pcKeys: ['PageDown'], macKeys: [], description: 'Bla ned en side', pcAction: 'Page Down', macAction: '', visualization: 'copy', difficulty: 1 },
  
  // Mac-only Level 1
  { id: '53mac', pcKeys: [], macKeys: ['Meta', 'ArrowLeft'], description: 'Gå til linjens start', pcAction: '', macAction: '⌘+←', visualization: 'undo', difficulty: 1 },
  { id: '54mac', pcKeys: [], macKeys: ['Meta', 'ArrowRight'], description: 'Gå til linjens slutt', pcAction: '', macAction: '⌘+→', visualization: 'redo', difficulty: 1 },
  
  // Level 2 - Vanlige
  { id: '7', pcKeys: ['Control', 'f'], macKeys: ['Meta', 'f'], description: 'Søk/Finn', pcAction: 'Ctrl+F', macAction: '⌘+F', visualization: 'search', difficulty: 2 },
  { id: '8', pcKeys: ['Control', 'a'], macKeys: ['Meta', 'a'], description: 'Merk alt', pcAction: 'Ctrl+A', macAction: '⌘+A', visualization: 'selectAll', difficulty: 2 },
  { id: '10', pcKeys: ['Control', 'p'], macKeys: ['Meta', 'p'], description: 'Skriv ut', pcAction: 'Ctrl+P', macAction: '⌘+P', visualization: 'print', difficulty: 2 },
  { id: '26', pcKeys: ['Control', 'i'], macKeys: ['Meta', 'i'], description: 'Kursiv skrift', pcAction: 'Ctrl+I', macAction: '⌘+I', visualization: 'copy', difficulty: 2 },
  { id: '27', pcKeys: ['Control', 'u'], macKeys: ['Meta', 'u'], description: 'Understreking', pcAction: 'Ctrl+U', macAction: '⌘+U', visualization: 'copy', difficulty: 2 },
  { id: '43', pcKeys: ['Control', 'g'], macKeys: ['Meta', 'g'], description: 'Søk neste', pcAction: 'Ctrl+G', macAction: '⌘+G', visualization: 'search', difficulty: 2 },
  { id: '44', pcKeys: ['Control', 'Shift', 'g'], macKeys: ['Meta', 'Shift', 'g'], description: 'Søk forrige', pcAction: 'Ctrl+Shift+G', macAction: '⌘+Shift+G', visualization: 'search', difficulty: 2 },
  { id: '59', pcKeys: ['Control', 'Enter'], macKeys: ['Meta', 'Enter'], description: 'Send/bekreft', pcAction: 'Ctrl+Enter', macAction: '⌘+Enter', visualization: 'new', difficulty: 2 },
  { id: '60', pcKeys: ['Shift', 'Enter'], macKeys: ['Shift', 'Enter'], description: 'Ny linje uten å sende', pcAction: 'Shift+Enter', macAction: 'Shift+Enter', visualization: 'new', difficulty: 2 },
  
  // PC-only Level 2
  { id: '57pc', pcKeys: ['Control', 'ArrowUp'], macKeys: [], description: 'Gå til forrige avsnitt', pcAction: 'Ctrl+↑', macAction: '', visualization: 'copy', difficulty: 2 },
  { id: '58pc', pcKeys: ['Control', 'ArrowDown'], macKeys: [], description: 'Gå til neste avsnitt', pcAction: 'Ctrl+↓', macAction: '', visualization: 'copy', difficulty: 2 },
  
  // Level 3 - Middels
  { id: '18', pcKeys: ['Control', 'd'], macKeys: ['Meta', 'd'], description: 'Bokmerke side', pcAction: 'Ctrl+D', macAction: '⌘+D', visualization: 'bookmark', difficulty: 3 },
  { id: '29', pcKeys: ['Control', 'k'], macKeys: ['Meta', 'k'], description: 'Sett inn lenke', pcAction: 'Ctrl+K', macAction: '⌘+K', visualization: 'copy', difficulty: 3 },
  { id: '30', pcKeys: ['Control', 'e'], macKeys: ['Meta', 'e'], description: 'Søk med valgt tekst', pcAction: 'Ctrl+E', macAction: '⌘+E', visualization: 'search', difficulty: 3 },
  { id: '61', pcKeys: ['Control', '['], macKeys: ['Meta', '['], description: 'Reduser innrykk', pcAction: 'Ctrl+[', macAction: '⌘+[', visualization: 'undo', difficulty: 3 },
  { id: '62', pcKeys: ['Control', ']'], macKeys: ['Meta', ']'], description: 'Øk innrykk', pcAction: 'Ctrl+]', macAction: '⌘+]', visualization: 'redo', difficulty: 3 },
  { id: '63', pcKeys: ['Control', '/'], macKeys: ['Meta', '/'], description: 'Kommenter kode/tekst', pcAction: 'Ctrl+/', macAction: '⌘+/', visualization: 'copy', difficulty: 3 },
  { id: '64', pcKeys: ['Control', 'Shift', 'k'], macKeys: ['Meta', 'Shift', 'k'], description: 'Slett linje', pcAction: 'Ctrl+Shift+K', macAction: '⌘+Shift+K', visualization: 'cut', difficulty: 3 },
  { id: '65', pcKeys: ['Shift', 'Delete'], macKeys: ['Shift', 'Delete'], description: 'Klipp ut', pcAction: 'Shift+Del', macAction: 'Shift+Del', visualization: 'cut', difficulty: 3 },
  
  // PC-only Level 3
  { id: '5pc', pcKeys: ['Control', 'y'], macKeys: [], description: 'Gjør om', pcAction: 'Ctrl+Y', macAction: '', visualization: 'redo', difficulty: 3 },
  { id: '16', pcKeys: ['Control', 'r'], macKeys: ['Meta', 'r'], description: 'Oppdater side', pcAction: 'Ctrl+R', macAction: '⌘+R', visualization: 'refresh', difficulty: 3 },
  { id: '17pc', pcKeys: ['F5'], macKeys: [], description: 'Oppdater side', pcAction: 'F5', macAction: '', visualization: 'refresh', difficulty: 3 },
  { id: '45pc', pcKeys: ['Control', 'Home'], macKeys: [], description: 'Gå til toppen', pcAction: 'Ctrl+Home', macAction: '', visualization: 'copy', difficulty: 3 },
  { id: '46pc', pcKeys: ['Control', 'End'], macKeys: [], description: 'Gå til bunnen', pcAction: 'Ctrl+End', macAction: '', visualization: 'copy', difficulty: 3 },
  
  // Level 4 - Avansert
  { id: '19', pcKeys: ['Control', 'l'], macKeys: ['Meta', 'l'], description: 'Gå til adressefelt', pcAction: 'Ctrl+L', macAction: '⌘+L', visualization: 'addressBar', difficulty: 4 },
  { id: '34', pcKeys: ['Control', 'Shift', 'b'], macKeys: ['Meta', 'Shift', 'b'], description: 'Vis bokmerkerad', pcAction: 'Ctrl+Shift+B', macAction: '⌘+Shift+B', visualization: 'bookmark', difficulty: 4 },
  { id: '35', pcKeys: ['Control', 'j'], macKeys: ['Meta', 'j'], description: 'Nedlastinger', pcAction: 'Ctrl+J', macAction: '⌘+J', visualization: 'new', difficulty: 4 },
  { id: '36', pcKeys: ['Control', 'Shift', 'a'], macKeys: ['Meta', 'Shift', 'a'], description: 'Fjern alle markeringer', pcAction: 'Ctrl+Shift+A', macAction: '⌘+Shift+A', visualization: 'selectAll', difficulty: 4 },
  { id: '49', pcKeys: ['Control', 'Shift', 'v'], macKeys: ['Meta', 'Shift', 'v'], description: 'Lim inn uten formatering', pcAction: 'Ctrl+Shift+V', macAction: '⌘+Shift+V', visualization: 'paste', difficulty: 4 },
  
  // PC-only Level 4
  { id: '23pc', pcKeys: ['Control', 'Backspace'], macKeys: [], description: 'Slett ord', pcAction: 'Ctrl+Backspace', macAction: '', visualization: 'deleteWord', difficulty: 4 },
  { id: '47pc', pcKeys: ['Control', 'ArrowLeft'], macKeys: [], description: 'Gå tilbake', pcAction: 'Ctrl+←', macAction: '', visualization: 'undo', difficulty: 4 },
  { id: '48pc', pcKeys: ['Control', 'ArrowRight'], macKeys: [], description: 'Gå fremover', pcAction: 'Ctrl+→', macAction: '', visualization: 'redo', difficulty: 4 },
  { id: '66pc', pcKeys: ['Control', 'Shift', 'ArrowLeft'], macKeys: [], description: 'Merk til linjens start', pcAction: 'Ctrl+Shift+←', macAction: '', visualization: 'selectAll', difficulty: 4 },
  { id: '67pc', pcKeys: ['Control', 'Shift', 'ArrowRight'], macKeys: [], description: 'Merk til linjens slutt', pcAction: 'Ctrl+Shift+→', macAction: '', visualization: 'selectAll', difficulty: 4 },
  { id: '68pc', pcKeys: ['Control', 'Shift', 'ArrowUp'], macKeys: [], description: 'Merk til dokumentets start', pcAction: 'Ctrl+Shift+↑', macAction: '', visualization: 'selectAll', difficulty: 4 },
  { id: '69pc', pcKeys: ['Control', 'Shift', 'ArrowDown'], macKeys: [], description: 'Merk til dokumentets slutt', pcAction: 'Ctrl+Shift+↓', macAction: '', visualization: 'selectAll', difficulty: 4 },
  { id: '70pc', pcKeys: ['Alt', 'ArrowUp'], macKeys: [], description: 'Flytt linje opp', pcAction: 'Alt+↑', macAction: '', visualization: 'copy', difficulty: 4 },
  { id: '71pc', pcKeys: ['Alt', 'ArrowDown'], macKeys: [], description: 'Flytt linje ned', pcAction: 'Alt+↓', macAction: '', visualization: 'copy', difficulty: 4 },
  
  // Level 5 - Ekspert
  { id: '39', pcKeys: ['Control', 'Shift', 's'], macKeys: ['Meta', 'Shift', 's'], description: 'Lagre som', pcAction: 'Ctrl+Shift+S', macAction: '⌘+Shift+S', visualization: 'save', difficulty: 5 },
  { id: '40', pcKeys: ['Control', '0'], macKeys: ['Meta', '0'], description: 'Nullstill zoom', pcAction: 'Ctrl+0', macAction: '⌘+0', visualization: 'refresh', difficulty: 5 },
  { id: '41', pcKeys: ['Control', '+'], macKeys: ['Meta', '+'], description: 'Zoom inn', pcAction: 'Ctrl++', macAction: '⌘++', visualization: 'copy', difficulty: 5 },
  { id: '42', pcKeys: ['Control', '-'], macKeys: ['Meta', '-'], description: 'Zoom ut', pcAction: 'Ctrl+-', macAction: '⌘+-', visualization: 'copy', difficulty: 5 },
  { id: '50', pcKeys: ['Control', 'Shift', 'c'], macKeys: ['Meta', 'Alt', 'c'], description: 'Kopier formatering', pcAction: 'Ctrl+Shift+C', macAction: '⌘+⌥+C', visualization: 'copy', difficulty: 5 },
  { id: '51', pcKeys: ['Control', 'Shift', 'x'], macKeys: ['Meta', 'Alt', 'x'], description: 'Lim inn formatering', pcAction: 'Ctrl+Shift+X', macAction: '⌘+⌥+X', visualization: 'paste', difficulty: 5 },
  { id: '52', pcKeys: ['Control', 'Shift', 'f'], macKeys: ['Meta', 'Shift', 'f'], description: 'Fullskjerm dokument', pcAction: 'Ctrl+Shift+F', macAction: '⌘+Shift+F', visualization: 'new', difficulty: 5 },
  { id: '74', pcKeys: ['Control', 'Shift', 'l'], macKeys: ['Meta', 'Shift', 'l'], description: 'Merk alle forekomster', pcAction: 'Ctrl+Shift+L', macAction: '⌘+Shift+L', visualization: 'selectAll', difficulty: 5 },
  { id: '77', pcKeys: ['Shift', 'ArrowUp'], macKeys: ['Shift', 'ArrowUp'], description: 'Merk opp', pcAction: 'Shift+↑', macAction: 'Shift+↑', visualization: 'selectAll', difficulty: 5 },
  { id: '78', pcKeys: ['Shift', 'ArrowDown'], macKeys: ['Shift', 'ArrowDown'], description: 'Merk ned', pcAction: 'Shift+↓', macAction: 'Shift+↓', visualization: 'selectAll', difficulty: 5 },
  
  // PC-only Level 5
  { id: '22pc', pcKeys: ['F2'], macKeys: [], description: 'Gi nytt navn til fil', pcAction: 'F2', macAction: '', visualization: 'rename', difficulty: 5 },
  { id: '72pc', pcKeys: ['Control', 'Shift', 'Home'], macKeys: [], description: 'Merk til dokumentets topp', pcAction: 'Ctrl+Shift+Home', macAction: '', visualization: 'selectAll', difficulty: 5 },
  { id: '73pc', pcKeys: ['Control', 'Shift', 'End'], macKeys: [], description: 'Merk til dokumentets bunn', pcAction: 'Ctrl+Shift+End', macAction: '', visualization: 'selectAll', difficulty: 5 },
  { id: '75pc', pcKeys: ['Control', 'm'], macKeys: [], description: 'Toggle tab/enter', pcAction: 'Ctrl+M', macAction: '', visualization: 'copy', difficulty: 5 },
  { id: '76pc', pcKeys: ['Control', 'Space'], macKeys: [], description: 'Autofullføring', pcAction: 'Ctrl+Space', macAction: '', visualization: 'new', difficulty: 5 },
  
  // Mac-only Level 5
  { id: '75mac', pcKeys: [], macKeys: ['Control', 'm'], description: 'Toggle tab/enter', pcAction: '', macAction: '⌃+M', visualization: 'copy', difficulty: 5 },
  { id: '76mac', pcKeys: [], macKeys: ['Control', 'Space'], description: 'Autofullføring', pcAction: '', macAction: '⌃+Space', visualization: 'new', difficulty: 5 },
  { id: '81mac', pcKeys: [], macKeys: ['Meta', 'Delete'], description: 'Slett til linjens start', pcAction: '', macAction: '⌘+Del', visualization: 'deleteWord', difficulty: 5 },
];

// Filtrer shortcuts basert på plattform
const getShortcutsForPlatform = (platform: Platform): Shortcut[] => {
  return shortcuts.filter(shortcut => {
    if (platform === 'pc') {
      return shortcut.pcKeys.length > 0;
    } else {
      return shortcut.macKeys.length > 0;
    }
  });
};

// Beregn tid basert på nivå
const getTimeForLevel = (level: number): number => {
  if (level <= 2) return 5.0;   // Første 2 nivåer: 5 sekunder
  if (level <= 4) return 4.5;   // Nivå 3-4: 4.5 sekunder
  if (level <= 7) return 4.0;   // Nivå 5-7: 4 sekunder
  if (level <= 10) return 3.5;  // Nivå 8-10: 3.5 sekunder
  if (level <= 13) return 3.0;  // Nivå 11-13: 3 sekunder
  if (level <= 17) return 2.5;  // Nivå 14-17: 2.5 sekunder
  if (level <= 20) return 2.0;  // Nivå 18-20: 2 sekunder
  return 1.5;                   // Nivå 21+: 1.5 sekunder (maks vanskelighet)
};

// Filtrer shortcuts basert på nivå og plattform
const getAvailableShortcuts = (level: number, platform: Platform): Shortcut[] => {
  const platformShortcuts = getShortcutsForPlatform(platform);
  
  if (level <= 3) return platformShortcuts.filter(s => s.difficulty === 1);
  if (level <= 6) return platformShortcuts.filter(s => s.difficulty <= 2);
  if (level <= 10) return platformShortcuts.filter(s => s.difficulty <= 3);
  if (level <= 15) return platformShortcuts.filter(s => s.difficulty <= 4);
  return platformShortcuts; // Alle hurtigtaster
};

export function ShortcutGame() {
  const [platform, setPlatform] = useState<Platform | null>(null);
  const [gameMode, setGameMode] = useState<GameMode | null>(null);
  const [currentShortcut, setCurrentShortcut] = useState<Shortcut | null>(null);
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | 'timeout' | null>(null);
  const [showVisualization, setShowVisualization] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [usedShortcuts, setUsedShortcuts] = useState<Set<string>>(new Set());
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [timerActive, setTimerActive] = useState(false);
  const [showLevelUp, setShowLevelUp] = useState(false);

  const getRandomShortcut = useCallback(() => {
    const availableShortcuts = getAvailableShortcuts(level, platform!);
    let selectableShortcuts = availableShortcuts;
    
    // Filtrer ut brukte shortcuts hvis mulig
    if (usedShortcuts.size < availableShortcuts.length) {
      selectableShortcuts = availableShortcuts.filter(s => !usedShortcuts.has(s.id));
    } else {
      // Reset brukte shortcuts når alle i dette nivået er brukt
      setUsedShortcuts(new Set());
    }
    
    const randomIndex = Math.floor(Math.random() * selectableShortcuts.length);
    const selected = selectableShortcuts[randomIndex];
    setUsedShortcuts(prev => new Set([...prev, selected.id]));
    return selected;
  }, [level, usedShortcuts, platform]);

  const startNewRound = useCallback(() => {
    const newShortcut = getRandomShortcut();
    setCurrentShortcut(newShortcut);
    setFeedback(null);
    setShowVisualization(false);
    setPressedKeys(new Set());
    const timeForLevel = getTimeForLevel(level);
    setTimeLeft(timeForLevel);
    setTimerActive(true);
  }, [getRandomShortcut, level]);

  const handleTimeout = useCallback(() => {
    setTimerActive(false);
    setFeedback('timeout');
    setStreak(0);
    setTotalAttempts(prev => prev + 1);
    
    const newLives = lives - 1;
    setLives(newLives);
    
    if (newLives <= 0) {
      setGameOver(true);
    } else {
      setTimeout(() => {
        startNewRound();
      }, 2000);
    }
  }, [startNewRound, lives]);

  // Timer countdown
  useEffect(() => {
    if (!timerActive || timeLeft <= 0) return;

    if (timeLeft <= 0) {
      handleTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0.1) {
          handleTimeout();
          return 0;
        }
        return prev - 0.1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [timerActive, timeLeft, handleTimeout]);

  const checkShortcut = useCallback(() => {
    if (!currentShortcut || pressedKeys.size === 0 || !platform) return;

    const requiredKeys = platform === 'pc' 
      ? new Set(currentShortcut.pcKeys.map(k => k.toLowerCase()))
      : new Set(currentShortcut.macKeys.map(k => k.toLowerCase()));
    
    const currentKeys = new Set(Array.from(pressedKeys).map(k => k.toLowerCase()));

    const isCorrect = 
      requiredKeys.size === currentKeys.size &&
      Array.from(requiredKeys).every(key => currentKeys.has(key));

    setTotalAttempts(prev => prev + 1);
    setTimerActive(false);

    if (isCorrect) {
      setFeedback('correct');
      const timeBonus = Math.floor(timeLeft * 2);
      const basePoints = 10 * (streak + 1);
      const levelBonus = level * 2;
      const modeMultiplier = gameMode === 'challenge' ? 2 : 1;
      const totalPoints = (basePoints + timeBonus + levelBonus) * modeMultiplier;
      setScore(prev => prev + totalPoints);
      setStreak(prev => prev + 1);
      setCorrectAnswers(prev => prev + 1);
      setShowVisualization(true);

      // Øk nivå hvert 3. riktige svar
      if ((correctAnswers + 1) % 3 === 0) {
        setLevel(prev => prev + 1);
        setUsedShortcuts(new Set()); // Reset når vi går til nytt nivå
        setShowLevelUp(true);
        setTimeout(() => {
          setShowLevelUp(false);
        }, 2000);
      }

      setTimeout(() => {
        startNewRound();
      }, 2000);
    } else {
      setFeedback('incorrect');
      setStreak(0);
      
      const newLives = lives - 1;
      setLives(newLives);
      
      if (newLives <= 0) {
        setGameOver(true);
      } else {
        setTimeout(() => {
          setFeedback(null);
          setPressedKeys(new Set());
          setTimerActive(true);
        }, 1000);
      }
    }
  }, [currentShortcut, pressedKeys, streak, startNewRound, platform, timeLeft, level, correctAnswers, lives, gameMode]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      
      setPressedKeys(prev => {
        const newSet = new Set(prev);
        newSet.add(e.key);
        return newSet;
      });
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      
      setTimeout(() => {
        checkShortcut();
      }, 100);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameStarted, gameOver, checkShortcut]);

  const startGame = (selectedPlatform: Platform, selectedMode: GameMode) => {
    setPlatform(selectedPlatform);
    setGameMode(selectedMode);
    setGameStarted(true);
    setScore(0);
    setStreak(0);
    setTotalAttempts(0);
    setCorrectAnswers(0);
    setLevel(1);
    setLives(3);
    setGameOver(false);
    setUsedShortcuts(new Set());
  };

  useEffect(() => {
    if (gameStarted && platform && gameMode && !currentShortcut && !gameOver) {
      startNewRound();
    }
  }, [gameStarted, platform, gameMode, currentShortcut, gameOver, startNewRound]);

  const resetGame = () => {
    setGameStarted(false);
    setPlatform(null);
    setGameMode(null);
    setCurrentShortcut(null);
    setPressedKeys(new Set());
    setFeedback(null);
    setShowVisualization(false);
    setTimerActive(false);
    setGameOver(false);
  };

  const restartGame = () => {
    if (platform && gameMode) {
      setScore(0);
      setStreak(0);
      setTotalAttempts(0);
      setCorrectAnswers(0);
      setLevel(1);
      setLives(3);
      setGameOver(false);
      setUsedShortcuts(new Set());
      setCurrentShortcut(null);
      startNewRound();
    }
  };

  // Game Over Screen
  if (gameOver) {
    return (
      <GameOverScreen
        score={score}
        level={level}
        correctAnswers={correctAnswers}
        totalAttempts={totalAttempts}
        platform={platform!}
        onRestart={restartGame}
        onMainMenu={resetGame}
      />
    );
  }

  // Platform Selection
  if (!platform) {
    return (
      <div className="min-h-screen relative overflow-hidden" style={{ background: '#2B1B3D' }}>
        {/* Decorative Pixel Art */}
        <PixelCloud className="absolute top-8 left-8 pointer-events-none" />
        <PixelCloud className="absolute top-16 right-16 pointer-events-none" style={{ transform: 'scaleX(-1)' }} />
        <PixelCloud className="absolute top-32 left-1/4 pointer-events-none" />
        <PixelCloud className="absolute top-24 right-1/3 pointer-events-none" style={{ transform: 'scaleX(-1)' }} />
        
        <PixelTree className="absolute bottom-0 left-8 pointer-events-none" />
        <PixelTree className="absolute bottom-0 right-8 pointer-events-none" style={{ transform: 'scaleX(-1)' }} />
        
        <PixelFlower className="absolute bottom-20 left-48 pointer-events-none" />
        <PixelFlower className="absolute bottom-20 left-64 pointer-events-none" />
        <PixelFlower className="absolute bottom-20 right-48 pointer-events-none" />
        <PixelFlower className="absolute bottom-20 right-64 pointer-events-none" />
        
        <PixelGrass className="absolute bottom-0 left-0 right-0 w-full pointer-events-none" />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="max-w-3xl w-full p-8 space-y-8 bg-[rgba(43,27,61,0.95)] rounded border-4 border-white/20">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-pixel)', lineHeight: '1.6' }}>
                HURTIGTAST-MESTER
              </h1>
              <p className="text-lg text-white/90" style={{ fontFamily: 'var(--font-pixel)', fontSize: '12px', lineHeight: '1.8' }}>
                Det er ikke alltid feil å ta en snarvei
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl text-white text-center" style={{ fontFamily: 'var(--font-pixel)', fontSize: '16px' }}>
                Velg plattform:
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <button
                  type="button"
                  onPointerDown={() => setPlatform('pc')}
                  className="p-8 border-4 border-white/30 rounded bg-[rgba(255,255,255,0.05)] hover:border-[#FF6B9D] hover:bg-[rgba(255,107,157,0.1)] transition-all group cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-4 pointer-events-none">
                    <Monitor className="w-16 h-16 text-[#FF6B9D] group-hover:scale-110 transition-transform" />
                    <div className="space-y-2">
                      <h3 className="text-xl text-white" style={{ fontFamily: 'var(--font-pixel)' }}>Windows/PC</h3>
                      <p className="text-white/70" style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}>
                        Ctrl, Alt, Win
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onPointerDown={() => setPlatform('mac')}
                  className="p-8 border-4 border-white/30 rounded bg-[rgba(255,255,255,0.05)] hover:border-[#9B59B6] hover:bg-[rgba(155,89,182,0.1)] transition-all group cursor-pointer"
                >
                  <div className="flex flex-col items-center gap-4 pointer-events-none">
                    <Apple className="w-16 h-16 text-[#9B59B6] group-hover:scale-110 transition-transform" />
                    <div className="space-y-2">
                      <h3 className="text-xl text-white" style={{ fontFamily: 'var(--font-pixel)' }}>macOS</h3>
                      <p className="text-white/70" style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}>
                        ⌘ Cmd, ⌥ Opt, ⌃ Ctrl
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Mode Selection
  if (platform && !gameMode) {
    return (
      <ModeSelector
        platform={platform}
        onSelectMode={(mode) => startGame(platform, mode)}
        onBack={() => setPlatform(null)}
      />
    );
  }

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ background: '#2B1B3D' }}>
      {/* Decorative Pixel Art */}
      <PixelCloud className="absolute top-4 left-4 opacity-70" />
      <PixelCloud className="absolute top-8 right-8 opacity-70" style={{ transform: 'scaleX(-1)' }} />
      
      <PixelGrass className="absolute bottom-0 left-0 right-0 w-full" />
      
      <div className="relative z-10 max-w-6xl mx-auto space-y-6 py-8 px-4">
        <ScoreBoard 
          score={score}
          streak={streak}
          totalAttempts={totalAttempts}
          level={level}
          platform={platform}
          onReset={resetGame}
        />

        {/* Lives Display */}
        <div className="p-4 bg-[rgba(43,27,61,0.9)] rounded border-4 border-white/20" style={{ imageRendering: 'pixelated' }}>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '12px' }}>LIV:</span>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <Heart 
                    key={i} 
                    className={`w-8 h-8 ${ 
                      i < lives 
                        ? 'text-[#FF4757] fill-[#FF4757]' 
                        : 'text-white/20'
                    }`} 
                  />
                ))}
              </div>
            </div>
            <div className="text-white/80" style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}>
              TID: {getTimeForLevel(level).toFixed(1)}s
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            {currentShortcut && (
              <ShortcutDisplay
                shortcut={currentShortcut}
                pressedKeys={pressedKeys}
                feedback={feedback}
                platform={platform}
                timeLeft={timeLeft}
                maxTime={getTimeForLevel(level)}
                gameMode={gameMode}
              />
            )}
          </div>

          <div>
            {currentShortcut && showVisualization && (
              <VisualFeedback visualization={currentShortcut.visualization} />
            )}
          </div>
        </div>

        {feedback === 'incorrect' && (
          <div className="p-4 bg-[rgba(255,71,87,0.2)] border-4 border-[#FF4757] rounded" style={{ imageRendering: 'pixelated' }}>
            <p className="text-center text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px', lineHeight: '1.8' }}>
              ❌ FEIL! {gameMode === 'challenge' && (
                <>RIKTIG: <strong className="text-[#FFD700]">{platform === 'pc' ? currentShortcut?.pcAction : currentShortcut?.macAction}</strong></>
              )}
            </p>
          </div>
        )}

        {feedback === 'timeout' && (
          <div className="p-4 bg-[rgba(255,215,0,0.2)] border-4 border-[#FFD700] rounded" style={{ imageRendering: 'pixelated' }}>
            <p className="text-center text-white" style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px', lineHeight: '1.8' }}>
              ⏰ TIDEN LØP UT! {gameMode === 'challenge' && (
                <>RIKTIG: <strong className="text-[#FFD700]">{platform === 'pc' ? currentShortcut?.pcAction : currentShortcut?.macAction}</strong></>
              )}
            </p>
          </div>
        )}

        {showLevelUp && (
          <LevelUpNotification level={level} timeLimit={getTimeForLevel(level)} />
        )}
      </div>
    </div>
  );
}