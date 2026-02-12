import { Card } from '@/app/components/ui/card';
import { Copy, Clipboard, Scissors, Undo2, Redo2, Save, Search, MousePointerClick, FilePlus, Monitor, X, Plus, RotateCcw, RefreshCw, Bookmark, Navigation, FileEdit, Trash2, Power } from 'lucide-react';
import { motion } from 'motion/react';
import type { VisualizationType } from '@/app/components/ShortcutGame';

interface VisualFeedbackProps {
  visualization: VisualizationType;
}

export function VisualFeedback({ visualization }: VisualFeedbackProps) {
  const renderVisualization = () => {
    switch (visualization) {
      case 'copy':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Copy className="w-6 h-6 text-blue-600" />
              Kopiering
            </h3>
            <div className="flex items-center justify-center gap-8">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5, repeat: 1 }}
                className="bg-blue-200 rounded-lg p-6 border-2 border-blue-400"
              >
                <p className="text-lg text-black font-semibold">Tekst som kopieres</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Copy className="w-8 h-8 text-blue-600" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-green-200 rounded-lg p-6 border-2 border-green-400 border-dashed"
              >
                <p className="text-lg text-black font-semibold">📋 I utklippstavlen</p>
              </motion.div>
            </div>
          </div>
        );

      case 'paste':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Clipboard className="w-6 h-6 text-green-600" />
              Innliming
            </h3>
            <div className="flex items-center justify-center gap-8">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.5 }}
                className="bg-green-200 rounded-lg p-6 border-2 border-green-400"
              >
                <p className="text-lg font-semibold">📋 Fra utklippstavle</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Clipboard className="w-8 h-8 text-green-600" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-blue-200 rounded-lg p-6 border-2 border-blue-400"
              >
                <p className="text-lg font-semibold">Limt inn her!</p>
              </motion.div>
            </div>
          </div>
        );

      case 'cut':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Scissors className="w-6 h-6 text-orange-600" />
              Klipp ut
            </h3>
            <div className="flex items-center justify-center gap-8">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.5, 0] }}
                transition={{ duration: 1 }}
                className="bg-red-200 rounded-lg p-6 border-2 border-red-400"
              >
                <p className="text-lg font-semibold">Tekst fjernes</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: [0, -20, 0] }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Scissors className="w-8 h-8 text-orange-600" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="bg-green-200 rounded-lg p-6 border-2 border-green-400"
              >
                <p className="text-lg font-semibold">📋 Til utklippstavle</p>
              </motion.div>
            </div>
          </div>
        );

      case 'undo':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Undo2 className="w-6 h-6 text-purple-600" />
              Angre
            </h3>
            <div className="flex items-center justify-center gap-8">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-red-200 rounded-lg p-6 border-2 border-red-400"
              >
                <p className="text-lg font-semibold">Feil handling</p>
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 1, repeat: 1 }}
              >
                <Undo2 className="w-8 h-8 text-purple-600" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-green-200 rounded-lg p-6 border-2 border-green-400"
              >
                <p className="text-lg font-semibold">✓ Tilbakestilt</p>
              </motion.div>
            </div>
          </div>
        );

      case 'redo':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Redo2 className="w-6 h-6 text-indigo-600" />
              Gjør om
            </h3>
            <div className="flex items-center justify-center gap-8">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="bg-yellow-200 rounded-lg p-6 border-2 border-yellow-400"
              >
                <p className="text-lg font-semibold">Angret handling</p>
              </motion.div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 1, repeat: 1 }}
              >
                <Redo2 className="w-8 h-8 text-indigo-600" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-green-200 rounded-lg p-6 border-2 border-green-400"
              >
                <p className="text-lg font-semibold">✓ Gjenopprettet</p>
              </motion.div>
            </div>
          </div>
        );

      case 'save':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Save className="w-6 h-6 text-green-600" />
              Lagre dokument
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <motion.div
                className="bg-blue-200 rounded-lg p-8 border-2 border-blue-400 w-64"
              >
                <p className="text-lg text-center mb-2 font-semibold">📄 Dokument.txt</p>
                <p className="text-sm text-black text-center">Innhold...</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.6 }}
              >
                <Save className="w-10 h-10 text-green-600" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-green-200 rounded-lg p-4 border-2 border-green-400"
              >
                <p className="text-lg text-center font-semibold">✓ Lagret!</p>
              </motion.div>
            </div>
          </div>
        );

      case 'search':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Search className="w-6 h-6 text-blue-600" />
              Søk/Finn
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <motion.div
                initial={{ width: 200 }}
                animate={{ width: [200, 300, 300] }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-full border-2 border-blue-400 px-4 py-3 flex items-center gap-2"
              >
                <Search className="w-5 h-5 text-gray-600" />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-black font-semibold"
                >
                  Søk her...
                </motion.span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-blue-100 rounded-lg p-4 space-y-2 w-80"
              >
                <div className="bg-yellow-200 p-2 rounded font-semibold">Søkeresultat 1</div>
                <div className="bg-yellow-200 p-2 rounded font-semibold">Søkeresultat 2</div>
                <div className="bg-yellow-200 p-2 rounded font-semibold">Søkeresultat 3</div>
              </motion.div>
            </div>
          </div>
        );

      case 'selectAll':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <MousePointerClick className="w-6 h-6 text-purple-600" />
              Merk alt
            </h3>
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="bg-white rounded-lg p-6 border-2 border-gray-400 w-80 space-y-2">
                <motion.div
                  initial={{ backgroundColor: '#ffffff' }}
                  animate={{ backgroundColor: '#bfdbfe' }}
                  transition={{ duration: 0.5 }}
                  className="p-3 rounded border border-blue-400"
                >
                  <p className="font-semibold">Linje 1 med tekst</p>
                </motion.div>
                <motion.div
                  initial={{ backgroundColor: '#ffffff' }}
                  animate={{ backgroundColor: '#bfdbfe' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="p-3 rounded border border-blue-400"
                >
                  <p className="font-semibold">Linje 2 med tekst</p>
                </motion.div>
                <motion.div
                  initial={{ backgroundColor: '#ffffff' }}
                  animate={{ backgroundColor: '#bfdbfe' }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="p-3 rounded border border-blue-400"
                >
                  <p className="font-semibold">Linje 3 med tekst</p>
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg font-semibold text-blue-700"
              >
                Alt er markert!
              </motion.p>
            </div>
          </div>
        );

      case 'new':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <FilePlus className="w-6 h-6 text-green-600" />
              Nytt dokument/fane
            </h3>
            <div className="flex items-center justify-center gap-8">
              <div className="bg-gray-200 rounded-lg p-6 border-2 border-gray-400 w-40 h-40 flex items-center justify-center">
                <p className="text-black text-4xl">📄</p>
              </div>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FilePlus className="w-10 h-10 text-green-600" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-lg p-6 border-2 border-green-400 w-40 h-40 flex items-center justify-center shadow-lg"
              >
                <p className="text-2xl">📄</p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: 2 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="h-6 bg-blue-600 ml-1"
                />
              </motion.div>
            </div>
          </div>
        );

      case 'switchWindow':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Monitor className="w-6 h-6 text-indigo-600" />
              Bytt mellom vinduer
            </h3>
            <div className="flex items-center justify-center gap-4">
              <motion.div
                initial={{ scale: 1, zIndex: 3 }}
                animate={{ scale: [1, 0.8, 0.8], x: [-50, 50, -50], zIndex: [3, 1, 3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-blue-200 rounded-lg p-6 border-2 border-blue-400 w-40 h-32 absolute"
              >
                <p className="text-sm font-semibold">Vindu 1</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, zIndex: 2 }}
                animate={{ scale: [0.8, 1, 0.8], zIndex: [2, 3, 2] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="bg-green-200 rounded-lg p-6 border-2 border-green-400 w-40 h-32 absolute"
              >
                <p className="text-sm font-semibold">Vindu 2</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, zIndex: 1 }}
                animate={{ scale: [0.8, 0.8, 1], x: [50, -50, 50], zIndex: [1, 2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="bg-purple-200 rounded-lg p-6 border-2 border-purple-400 w-40 h-32 absolute"
              >
                <p className="text-sm font-semibold">Vindu 3</p>
              </motion.div>
            </div>
            <div className="h-32" />
          </div>
        );

      case 'closeTab':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <X className="w-6 h-6 text-red-600" />
              Lukk fane
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex gap-2">
                {[1, 2, 3].map((num) => (
                  <motion.div
                    key={num}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={num === 2 ? { opacity: 0, scale: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className={`px-4 py-2 rounded-t-lg border-2 ${
                      num === 2 ? 'bg-red-200 border-red-400' : 'bg-gray-200 border-gray-400'
                    }`}
                  >
                    <p className="text-sm font-semibold">Fane {num}</p>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <X className="w-10 h-10 text-red-600" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="text-lg font-semibold text-black"
              >
                Fane 2 lukket!
              </motion.p>
            </div>
          </div>
        );

      case 'newTab':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Plus className="w-6 h-6 text-green-600" />
              Ny fane
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex gap-2">
                <div className="px-4 py-2 rounded-t-lg border-2 bg-gray-200 border-gray-400">
                  <p className="text-sm font-semibold">Fane 1</p>
                </div>
                <div className="px-4 py-2 rounded-t-lg border-2 bg-gray-200 border-gray-400">
                  <p className="text-sm font-semibold">Fane 2</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="px-4 py-2 rounded-t-lg border-2 bg-green-200 border-green-400"
                >
                  <p className="text-sm font-semibold">Ny fane!</p>
                </motion.div>
              </div>
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Plus className="w-10 h-10 text-green-600" />
              </motion.div>
            </div>
          </div>
        );

      case 'reopenTab':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <RotateCcw className="w-6 h-6 text-blue-600" />
              Gjenåpne lukket fane
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <motion.div
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex gap-2"
              >
                <div className="px-4 py-2 rounded-t-lg border-2 bg-gray-200 border-gray-400">
                  <p className="text-sm font-semibold">Fane 1</p>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="px-4 py-2 rounded-t-lg border-2 bg-blue-200 border-blue-400"
                >
                  <p className="text-sm font-semibold">Gjenåpnet!</p>
                </motion.div>
              </motion.div>
              <motion.div
                animate={{ rotate: [0, -360] }}
                transition={{ duration: 1 }}
              >
                <RotateCcw className="w-10 h-10 text-blue-600" />
              </motion.div>
            </div>
          </div>
        );

      case 'nextTab':
      case 'prevTab':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Monitor className="w-6 h-6 text-purple-600" />
              {visualization === 'nextTab' ? 'Neste fane' : 'Forrige fane'}
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex gap-2">
                {[1, 2, 3].map((num) => (
                  <motion.div
                    key={num}
                    initial={{ opacity: num === 1 ? 1 : 0.5 }}
                    animate={{ 
                      opacity: visualization === 'nextTab' 
                        ? (num === 2 ? 1 : 0.5)
                        : (num === 3 ? 1 : 0.5)
                    }}
                    transition={{ delay: 0.5 }}
                    className={`px-4 py-2 rounded-t-lg border-2 ${
                      (visualization === 'nextTab' && num === 2) || (visualization === 'prevTab' && num === 3)
                        ? 'bg-purple-200 border-purple-400'
                        : 'bg-gray-200 border-gray-400'
                    }`}
                  >
                    <p className="text-sm font-semibold">Fane {num}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'print':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <FilePlus className="w-6 h-6 text-gray-700" />
              Skriv ut
            </h3>
            <div className="flex items-center justify-center gap-8">
              <motion.div
                className="bg-white rounded-lg p-6 border-2 border-gray-400 w-48"
              >
                <p className="text-center font-semibold">📄 Dokument</p>
              </motion.div>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="text-4xl">🖨️</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="bg-white rounded-lg p-4 border-2 border-green-400 shadow-lg"
              >
                <p className="text-center font-semibold">📄 Utskrift</p>
              </motion.div>
            </div>
          </div>
        );

      case 'refresh':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <RefreshCw className="w-6 h-6 text-blue-600" />
              Oppdater side
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCw className="w-16 h-16 text-blue-600" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="bg-blue-200 rounded-lg p-6 border-2 border-blue-400"
              >
                <p className="text-lg font-semibold">Laster inn...</p>
              </motion.div>
            </div>
          </div>
        );

      case 'bookmark':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Bookmark className="w-6 h-6 text-yellow-600" />
              Bokmerke side
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="bg-white rounded-lg p-6 border-2 border-gray-400 w-80">
                <p className="text-sm text-black font-semibold">example.com</p>
                <p className="text-lg font-semibold">Nettside tittel</p>
              </div>
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Bookmark className="w-12 h-12 text-yellow-600 fill-yellow-600" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="bg-yellow-200 rounded-lg p-4 border-2 border-yellow-400"
              >
                <p className="text-center font-semibold">⭐ Lagt til i bokmerker!</p>
              </motion.div>
            </div>
          </div>
        );

      case 'addressBar':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Navigation className="w-6 h-6 text-blue-600" />
              Gå til adressefelt
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.6, repeat: 1 }}
                className="bg-blue-200 rounded-full border-2 border-blue-400 px-6 py-3 w-96"
              >
                <div className="flex items-center gap-2">
                  <Navigation className="w-5 h-5 text-gray-700" />
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 2, opacity: [0, 1, 0] }}
                    transition={{ delay: 0.6, duration: 1, repeat: Infinity }}
                    className="h-6 bg-blue-600"
                  />
                  <p className="text-black font-semibold">example.com</p>
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 'rename':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <FileEdit className="w-6 h-6 text-purple-600" />
              Gi nytt navn
            </h3>
            <div className="flex items-center justify-center gap-8">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 0.5 }}
                className="bg-gray-200 rounded-lg p-6 border-2 border-gray-400"
              >
                <p className="text-lg font-semibold">📄 gammelt-navn.txt</p>
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ delay: 0.8 }}
              >
                <FileEdit className="w-10 h-10 text-purple-600" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 }}
                className="bg-purple-200 rounded-lg p-6 border-2 border-purple-400"
              >
                <p className="text-lg font-semibold">📄 nytt-navn.txt</p>
              </motion.div>
            </div>
          </div>
        );

      case 'deleteWord':
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Trash2 className="w-6 h-6 text-red-600" />
              Slett ord
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="bg-white rounded-lg p-6 border-2 border-gray-400 w-80 space-y-4">
                <p className="text-lg font-semibold">Dette er en <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="bg-red-200 font-bold"
                >eksempel</motion.span> setning</p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Trash2 className="w-10 h-10 text-red-600" />
              </motion.div>
            </div>
          </div>
        );

      case 'quit':
      case 'taskManager':
      case 'desktop':
      default:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black flex items-center gap-2">
              <Power className="w-6 h-6 text-red-600" />
              Avslutt program
            </h3>
            <div className="flex flex-col items-center justify-center gap-6">
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="bg-red-200 rounded-lg p-8 border-2 border-red-400 w-64 h-40 flex items-center justify-center"
              >
                <p className="text-2xl font-semibold">Program</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
              >
                <Power className="w-12 h-12 text-red-600" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-lg font-semibold text-black"
              >
                Program avsluttet
              </motion.p>
            </div>
          </div>
        );
    }
  };

  return (
    <Card className="p-8 bg-gradient-to-br from-gray-100 to-gray-200 min-h-[400px] flex items-center justify-center">
      <div className="w-full">
        {renderVisualization()}
      </div>
    </Card>
  );
}