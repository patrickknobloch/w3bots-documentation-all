---
sidebar_position: 3
title: Audity Scoring System
---

# Audity Scoring System

The Audity Scoring System evaluates tokens based on various factors to measure the security and trustworthiness of a project. This documentation provides a detailed explanation of how the scoring system works, how the scores are calculated, and how each function contributes to the overall score.

## Overview

The Audity Scoring System uses a combination of several analytical factors to assess tokens. These factors are divided into different categories, each contributing a specific number of points to the overall score.

### Scoring Categories

1. **Wash Trading Detection** 
2. **Holder Analysis** 
3. **Contract Analysis** 
4. **Liquidity Analysis**
5. **Social Analysis**

### Total Score

The total score of a token is derived from the sum of points across all categories. A token with a high score is considered more secure and trustworthy.

# Detailed Explanation of Categories

## Liquidity Scoring

The Liquidity Scoring System evaluates tokens based on various metrics related to liquidity and trading activity. Each function calculates points for specific categories, contributing to the overall score that assesses the token's trustworthiness and security.

### 1. Volume Score
- **Points Distribution**: Ranges from 0 to 30 points.
- **Calculation**: The score is based on the 24-hour trading volume compared to the market cap. A higher volume-to-market-cap ratio indicates better liquidity.
- **Importance**: High trading volume relative to market cap signifies active interest and confidence from investors, reducing the risk of price manipulation.

### 2. Price Stability Points
- **Points Distribution**: Ranges from 0 to 10 points.
- **Calculation**: Points are assigned based on the percentage change in price over the past 24 hours, adjusted for market cap. Less volatility is rewarded.
- **Importance**: Stable prices suggest a reliable token, attracting more investors and reducing risk.

### 3. Pool Age Points
- **Points Distribution**: Ranges from 0 to 30 points.
- **Calculation**: The age of the oldest pool is considered, with older pools scoring higher due to perceived stability.
- **Importance**: Longer-standing pools are often seen as more trustworthy, as they have withstood the test of time and market fluctuations.

### 4. Liquidity Ratio Points
- **Points Distribution**: Ranges from 0 to 20 points.
- **Calculation**: Points are assigned based on the liquidity ratio, with lower ratios scoring higher points.
- **Importance**: A higher liquidity ratio indicates better liquidity relative to market cap, reducing slippage and facilitating smoother trading.

### 5. Reserve in Quote Token Score
- **Points Distribution**: Ranges from 0 to 5 points.
- **Calculation**: Points are calculated based on the reserve amount in quote tokens. Higher reserves lead to higher scores.
- **Importance**: Adequate reserves can absorb selling pressure and provide liquidity, which is crucial during market fluctuations.

### 6. Pool Transaction Activity Score
- **Points Distribution**: Ranges from 0 to 15 points.
- **Calculation**: The score is determined by the total number of transactions in the pool, with more activity yielding higher points.
- **Importance**: High transaction activity indicates a vibrant trading environment, suggesting trust and engagement from users.

## Wash Trading Scoring

The Wash Trading Scoring System evaluates tokens based on various metrics related to trading activity and potential manipulation. Each metric contributes to the overall score, which assesses the likelihood of wash trading.

### 1. Suspicious Volume Score
- **Points Distribution**: Ranges from 0 to 30 points.
- **Calculation**: The score is based on the ratio of suspicious volume to total trading volume. Higher suspicious volume leads to a lower score.
- **Importance**: Identifying suspicious trading activity helps in assessing the integrity of the token and the potential for price manipulation.

### 2. Recurring Patterns Score
- **Points Distribution**: Ranges from 0 to 10 points.
- **Calculation**: Points are awarded for identifying recurring trading patterns among users. Each recurring trader increases the score.
- **Importance**: Recognizing patterns of trading can indicate collusion or manipulation, making it crucial for evaluating trustworthiness.

### 3. Trade Balance Score
- **Points Distribution**: Ranges from 0 to 30 points.
- **Calculation**: This score assesses the balance of buy/sell ratios and buyer/seller ratios within a pool. A more balanced ratio results in a higher score.
- **Importance**: A balanced trading environment reduces the likelihood of wash trading, indicating a healthier market.

### 4. Unnatural Volume Score
- **Points Distribution**: Ranges from 0 to 30 points.
- **Calculation**: The score considers the ratio of suspicious and arbitrage volume to total trading volume. Higher proportions of suspicious and arbitrage volume decrease the score.
- **Importance**: Understanding unnatural trading volumes is essential for detecting potential wash trading activities and ensuring market integrity.


## Summary

The total score is the sum of points from all categories, with a maximum score of 100. A higher total score reflects a more secure and trustworthy token, making it an essential metric for potential investors and traders.
