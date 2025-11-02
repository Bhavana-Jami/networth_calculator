
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
// import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import AddAssetModal from "./AddAssetModal"
import AddLiabilityModal from "./AddLiabilityModal"

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]

export default function Dashboard() {
  const [netWorth, setNetWorth] = useState(500000)
  const [assets, setAssets] = useState([
    { name: "House", type: "Real Estate", amount: 4000000 },
    { name: "Savings", type: "Cash", amount: 100000 },
  ])
  const [liabilities, setLiabilities] = useState([{ name: "Car Loan", type: "Loan", amount: 500000 }])
  const [showAddAsset, setShowAddAsset] = useState(false)
  const [showAddLiability, setShowAddLiability] = useState(false)

  const data = [
    { name: "Assets", value: assets.reduce((sum, asset) => sum + asset.amount, 0) },
    { name: "Liabilities", value: liabilities.reduce((sum, liability) => sum + liability.amount, 0) },
  ]

  const handleAddAsset = (newAsset) => {
    setAssets([...assets, newAsset])
    setNetWorth(netWorth + newAsset.amount)
    setShowAddAsset(false)
  }

  const handleAddLiability = (newLiability) => {
    setLiabilities([...liabilities, newLiability])
    setNetWorth(netWorth - newLiability.amount)
    setShowAddLiability(false)
  }

  return (
    <div className="w-full max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Net Worth Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-center mb-6">₹{netWorth.toLocaleString()}</div>
          <div className="flex justify-center mb-6">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={data} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value" label>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <Button onClick={() => setShowAddAsset(true)}>➕ Add Asset</Button>
            <Button onClick={() => setShowAddLiability(true)} variant="outline">
              ➖ Add Liability
            </Button>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Assets</h3>
            {assets.map((asset, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>
                  🏠 {asset.name} – ₹{asset.amount.toLocaleString()} ({asset.type})
                </span>
                <div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
            <h3 className="text-xl font-semibold">Liabilities</h3>
            {liabilities.map((liability, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>
                  🚗 {liability.name} – ₹{liability.amount.toLocaleString()} ({liability.type})
                </span>
                <div>
                  <Button variant="ghost" size="sm">
                    Edit
                  </Button>
                  <Button variant="ghost" size="sm">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      {showAddAsset && <AddAssetModal onClose={() => setShowAddAsset(false)} onAdd={handleAddAsset} />}
      {showAddLiability && <AddLiabilityModal onClose={() => setShowAddLiability(false)} onAdd={handleAddLiability} />}
    </div>
  )
}

