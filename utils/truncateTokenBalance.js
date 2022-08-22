export default function truncateTokenBalance(balanceStr, decimals = 4) {
  if (!balanceStr) {
    return `0.${Array(decimals).fill(0).join('')}`
  }
  const splitted = balanceStr.split('.')
  return `${splitted[0]}.${splitted[1].substring(0, decimals)}`
}
