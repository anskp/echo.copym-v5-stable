import Arrow from "../assets/svg/Arrow";
import ClipPath from "../assets/svg/ClipPath";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benefits";
import Heading from "./Heading";
import Section from "./Section";
import { GiShield, GiLockedChest, GiFiles, GiCompass, GiArrowDunk, GiChart, GiChatBubble, GiSmartphone, GiChart as GiBarChart, GiCoins } from 'react-icons/gi';
import { useState } from "react";
import CoraNotification from "./design/coracard1";
import PortfolioBreakdown from "./design/coracard2";
import PortfolioEventsCard from "./design/coracard3";
import StepRectangles from "./design/stackedcora";
import SolCard from "./design/solcard";
import DailyAI from "./design/daily-ai";
import Graph from "./design/graph";
const Benefits = () => {
  return (
    <section className="relative">
      {/* Main Content */}
      <div className="relative z-10 bg-black rounded-t-[2rem] sm:rounded-t-[3rem] lg:rounded-t-[4rem] rounded-b-[2rem] sm:rounded-b-[3rem] lg:rounded-b-[4rem] pt-16 sm:pt-20 lg:pt-24 pb-20 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight anton-regular mb-6">
              <span className="text-white">CORA AI</span>
              <br />
              <span className="text-green-500">POWERS YOUR TRADING</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto px-4">
              Master the markets with AI-driven insights, predictive alerts, and real-time intelligence that give you the edge in crypto trading
            </p>
          </div>

          {/* Perfect Bento Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-4">
            {/* Top Section: "Daily Market Recap" - Spans full width on mobile, 12 cols on desktop */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-12 bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/50 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">Daily Market Recap</h3>
                <p className="text-gray-300 text-sm sm:text-base max-w-2xl">
                  Start your day with Cora AI's intelligent market analysis. Get instant insights into what's driving price movements, key market events, and actionable trading opportunities delivered in simple, digestible summaries.
                </p>
              </div>
              <DailyAI />
            </div>
            {/* Middle-Left: "Smart Price Alerts" */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50 h-auto">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Smart Price Alerts</h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-3">
                Set intelligent price alerts with Cora AI's predictive analysis. Get notified before major price movements with AI-powered insights and automated trading signals.
              </p>
              {/* SolCard Component */}
              <div className="scale-50 sm:scale-75 transform -m-4 sm:-m-4">
                <SolCard />
              </div>
            </div>

            {/* Middle-Center: "Portfolio Events" */}
            <div className="col-span-1 sm:col-span-1 lg:col-span-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-gray-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 lg:hidden">Portfolio Events</h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-3 lg:hidden">
                Track your portfolio events and get real-time updates on your investments.
              </p>
              {/* Stacked Cards Component */}
              <div className="scale-50 sm:scale-75 transform -m-4 sm:-m-6">
                <PortfolioEventsCard />
              </div>
            </div>
            {/* Middle-Right: "AI Portfolio Insights" */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-4 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">AI Portfolio Insights</h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-4">
                Get intelligent portfolio breakdowns and diversification recommendations powered by Cora AI. Track your asset allocation across technology, real estate, and digital art with smart rebalancing suggestions.
              </p>
              
              {/* PortfolioBreakdown Component */}
              <div className="scale-50 sm:scale-75 transform -m-4 sm:-m-6">
                <PortfolioBreakdown />
              </div>
            </div>

            {/* Combined Card: "Real-Time Alerts" */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-7 bg-gradient-to-br from-gray-900/80  h-[17rem]  lg:h-[16.5rem] to-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-gray-700/50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Real-Time Alerts</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Get instant Cora AI notifications for price alerts, market news, and portfolio updates. Stay informed with intelligent alerts that adapt to your trading patterns and market conditions.
                  </p>
                </div>
                <div className="scale-50 sm:scale-[1] transform -mt-[21rem] md:-mt-[14rem] lg:-mt-[10rem]   flex justify-center">
                  <StepRectangles />
                </div>
              </div>
            </div>

            {/* Bottom-Center: Graph Component */}
            <div className="col-span-1 sm:col-span-2 lg:col-span-5 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-gray-700/50">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Crypto Market Intelligence</h3>
              <p className="text-gray-300 text-xs sm:text-sm mb-4">
                Cora AI's advanced charting and market analysis. Track Bitcoin, Ethereum, and BNB performance with AI-powered trend predictions and real-time price alerts.
              </p>
              <div className="flex justify-center items-center scale-50 sm:scale-75 transform -m-4 sm:-m-6">
                <Graph />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;