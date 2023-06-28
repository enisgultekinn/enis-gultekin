import redis from '@/lib/redis'

export const getRedis = async (key, data) => {
	return await redis.hget(key, data)
}
