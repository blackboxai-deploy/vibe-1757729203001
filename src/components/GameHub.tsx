'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FightNightLegends from '@/components/FightNightLegends';
import HelicopterCombat from '@/components/HelicopterCombat';
import DigitalArtStudio from '@/components/DigitalArtStudio';

type GameMode = 'hub' | 'fight-night' | 'helicopter' | 'art-studio';

export default function GameHub() {
  const [currentGame, setCurrentGame] = useState<GameMode>('hub');
  const [userProfile] = useState({
    name: 'Player',
    totalScore: 0,
    achievements: [],
    artworkCount: 0,
    fightsWon: 0,
    flightHours: 0
  });

  if (currentGame === 'fight-night') {
    return (
      <FightNightLegends 
        onBack={() => setCurrentGame('hub')} 
        userProfile={userProfile}
      />
    );
  }

  if (currentGame === 'helicopter') {
    return (
      <HelicopterCombat 
        onBack={() => setCurrentGame('hub')} 
        userProfile={userProfile}
      />
    );
  }

  if (currentGame === 'art-studio') {
    return (
      <DigitalArtStudio 
        onBack={() => setCurrentGame('hub')} 
        userProfile={userProfile}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl p-8 bg-gray-900/95 backdrop-blur-sm border-gray-700">
        <div className="text-center space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-7xl font-bold text-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-blue-500 to-green-500 bg-clip-text animate-pulse">
              MEGA ARENA
            </h1>
            <h2 className="text-3xl font-bold text-white">
              3 Epic Games • 1 Ultimate Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enter the ultimate gaming trilogy: Fight legendary boxers with supernatural powers, 
              pilot aircraft through epic adventures, and create masterpiece artwork with professional tools.
            </p>
          </div>

          {/* User Profile */}
          <div className="bg-gradient-to-r from-purple-800/30 to-blue-800/30 rounded-lg p-4 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-2">Welcome, {userProfile.name}!</h3>
            <div className="grid grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">{userProfile.totalScore}</div>
                <div className="text-gray-300">Total Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400">{userProfile.fightsWon}</div>
                <div className="text-gray-300">Fights Won</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">{userProfile.flightHours}</div>
                <div className="text-gray-300">Flight Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">{userProfile.artworkCount}</div>
                <div className="text-gray-300">Artworks</div>
              </div>
            </div>
          </div>

          {/* Game Selection */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Fight Night Legends */}
            <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-red-900/50 to-orange-800/50 border-red-500/30 cursor-pointer overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="text-6xl mb-4">🥊</div>
                <h3 className="text-2xl font-bold text-red-400">FIGHT NIGHT</h3>
                <h4 className="text-xl text-white">LEGENDS</h4>
                <p className="text-gray-300 text-sm">
                  Battle legendary boxers with supernatural abilities. Mike Tyson, Ali, Holyfield and more!
                </p>
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>🏆 Champions:</span>
                    <span>6 Legendary Boxers</span>
                  </div>
                  <div className="flex justify-between">
                    <span>⚡ Special Moves:</span>
                    <span>Fireball Attacks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🎮 Mode:</span>
                    <span>Tournament & VS</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setCurrentGame('fight-night')}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                >
                  ENTER THE RING
                </Button>
              </div>
            </Card>

            {/* Helicopter Combat */}
            <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-blue-900/50 to-cyan-800/50 border-blue-500/30 cursor-pointer overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="text-6xl mb-4">🚁</div>
                <h3 className="text-2xl font-bold text-blue-400">HELICOPTER</h3>
                <h4 className="text-xl text-white">COMBAT</h4>
                <p className="text-gray-300 text-sm">
                  Pilot combat helicopter through intense aerial battles. Destroy enemies, collect coins!
                </p>
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>🚁 Aircraft:</span>
                    <span>Combat Helicopter</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🎯 Enemies:</span>
                    <span>Fighter Jets & Bombers</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🪙 Rewards:</span>
                    <span>Coins & Fireballs</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setCurrentGame('helicopter')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  START MISSION
                </Button>
              </div>
            </Card>

            {/* Digital Art Studio */}
            <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-green-900/50 to-emerald-800/50 border-green-500/30 cursor-pointer overflow-hidden">
              <div className="p-6 space-y-4">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold text-green-400">DIGITAL ART</h3>
                <h4 className="text-xl text-white">STUDIO</h4>
                <p className="text-gray-300 text-sm">
                  Create masterpiece artwork with professional tools. Download your creations for free!
                </p>
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>🖌️ Tools:</span>
                    <span>Brushes & Shapes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>🎨 Features:</span>
                    <span>Layers & Colors</span>
                  </div>
                  <div className="flex justify-between">
                    <span>💾 Export:</span>
                    <span>PNG, SVG, PDF</span>
                  </div>
                </div>
                <Button 
                  onClick={() => setCurrentGame('art-studio')}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold"
                >
                  START CREATING
                </Button>
              </div>
            </Card>
          </div>

          {/* Features Highlight */}
          <div className="bg-gray-800/50 rounded-lg p-6 space-y-4">
            <h3 className="text-2xl font-bold text-white">✨ Premium Features</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="text-center space-y-2">
                <div className="text-2xl">🎵</div>
                <h4 className="font-semibold text-yellow-400">Dynamic Audio</h4>
                <p className="text-gray-300">Immersive soundtracks and effects for each game</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">📱</div>
                <h4 className="font-semibold text-blue-400">Mobile Ready</h4>
                <p className="text-gray-300">Touch controls optimized for all devices</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">🔗</div>
                <h4 className="font-semibold text-green-400">Shareable</h4>
                <p className="text-gray-300">Share your artwork and achievements online</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">🚀</div>
                <h4 className="font-semibold text-red-400">High Performance</h4>
                <p className="text-gray-300">Smooth 60fps gaming experience</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="text-center text-gray-400 text-sm">
            <p>🎮 <strong>3 Complete Games</strong> • 🥊 <strong>6 Boxing Legends</strong> • ✈️ <strong>8 Aircraft Types</strong> • 🎨 <strong>Professional Art Tools</strong></p>
            <p className="mt-2">Built with Next.js, TypeScript, Canvas API, and Web Audio API</p>
          </div>
        </div>
      </Card>
    </div>
  );
}